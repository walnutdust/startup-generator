/**
 * This JavaScript file holds the implementation for the logic required
 * to expand a random "sentence" based on "grammar" rules. For purposes of
 * illustration, consider the following example:
 *
 * **Example**
 * <sentence> = <noun> <verb>.
 * <noun> = John | Harry
 * <verb> = flies | eats
 *
 * According to the grammar above, "John flies.", "Harry flies.", "John eats.",
 * and "Harry eats." form the entire universe of valid sentences.
 *
 * Generating a random sentence that is valid according to the provided grammar
 * thus simply requires a recursive expansion of the rules starting from the
 * base rule of the sentence. We say that a set of grammar rules is governed by
 * a Dictionary, which holds a key-value mapping of non-terminals (grammar
 * elements that can be further expanded) to Definitions (a list of possible
 * expansions). Each expansion (e.g. "<noun> <verb>") can be seen as a list of
 * space separated grammar elements, which may be further expanded.
 */

// TODO: seed
// TODO: asserts

const generalMap = (root, { callback, callbackIfFn, postCallbackIfArray }) => {
  if (Array.isArray(root)) {
    const mappedArray = root.map((elem) =>
      generalMap(elem, { callback, callbackIfFn, postCallbackIfArray })
    );
    if (postCallbackIfArray) {
      return postCallbackIfArray(mappedArray);
    }
    return mappedArray;
  }

  if (root instanceof GrammarElement || typeof root === "string") {
    return callback(root);
  }

  if (typeof root === "object") {
    const mappedObject = {};
    const keys = Object.keys(root);
    for (const key of keys) {
      mappedObject[key] = generalMap(root[key], {
        callback,
        callbackIfFn,
        postCallbackIfArray,
      });
    }

    return mappedObject;
  }

  if (typeof root === "function") {
    if (callbackIfFn) {
      return callbackIfFn(root);
    }
    return root;
  }

  console.error(root);

  throw Error(`Unexpected root!`);
};

const compressIfFormsString = (root) => {
  if (Array.isArray(root)) {
    if (root.every((elem) => typeof elem === "string")) {
      return root.join("");
    } else if (root.length === 1) {
      return root[0];
    }
  }

  return root;
};

export { generalMap };

/**
 * A Dictionary consists of a key-value mapping of non-terminals (grammar
 * elements that can be further expanded) to Definitions (a list of possible
 * expansions).
 */
class Dictionary {
  #random;
  #dictionary;

  /**
   * Constructs a mapping of non-terminals to Defintions, based on `rawRules`
   * provided.
   *
   * Precondition: `rawRules` has to be a valid JSON Map.
   * TODO: more conditions.
   *
   * @param {Map} rawRules - raw rules.
   * @param {Random} random - the random generator to be used.
   */
  constructor(rawRules, random) {
    this.#random = random;
    this.#dictionary = new Map();

    for (const key of Object.keys(rawRules)) {
      this.#dictionary.set(key, new Definition(rawRules[key]));
    }
  }

  /**
   * Returns the result obtained by expanding the non-terminal element key.
   * If key is not present in the dictionary, and error to be thrown.
   *
   * @param {string} key - non-terminal to be expanded.
   *
   * @returns {string} Result obtained by expanding the non-terminal element
   * key.
   */
  expand(key) {
    if (!this.#dictionary.has(key)) {
      throw Error(`Definition for ${key} not found!`);
    }

    return this.#dictionary.get(key).expand(this);
  }

  /**
   * Generates the next seed to be used.
   *
   * @returns {number} Next seed to be used.
   */
  nextSeed() {
    return this.#random.nextInt();
  }

  /**
   * Sets the definition pointed to by key to be the Definition processed from
   * newRawDefinition.
   *
   * @param {string} key - non-terminal key.
   * @param {list} newRawDefinition - raw Definition to be pointed to by key.
   */
  setDefinition(key, newRawDefinition) {
    this.#dictionary.set(key, new Definition(newRawDefinition));
  }

  toString() {
    let string = "{\n";
    this.#dictionary.forEach((value, key) => {
      string += `\t${key}: ${value.toString()}\n`;
    });
    string += "\n}";
    return string;
  }
}

/**
 * The GrammarElement class represents a singular grammar element in our random
 * sentence generator. The grammar consists of terminals (which expand to
 * themselves), nonterminals (which can be further expanded), productions (a
 * list of grammar elements), and definitions (a vector of productions).
 *
 * The GrammarElement class is an abstract class; do not call its constructor
 * directly.
 */
class GrammarElement {
  /**
   * For all intents and purposes the GrammarElement is meant to be an abstract
   * class. Direct calls to the GrammarElement class should fail.
   */
  constructor() {
    if (new.target === "GrammarElement") {
      throw Error("Constructor for GrammarElement class is unimplemented!");
    }
  }

  /**
   * Expands the current GrammarElement depending on its type.
   *
   * @param {Dictionary} dictionary - the dictionary to be used as reference
   * during expansion.
   */
  expand(dictionary) {
    throw Error("Invalid call to abstract GrammarElement class' expand");
  }

  // TODO
  equals(other) {
    throw Error("Invalid call to abstract GrammarElement class' equals");
  }
}

/**
 * A terminal is a GrammarElement that expands to itself.
 */
class Terminal extends GrammarElement {
  /**
   * Initializes a new Terminal object with the terminal string passed in.
   *
   * @param {string} terminal - terminal string that this instance will be
   * based on.
   */
  constructor(terminal) {
    super();
    this._elem = terminal;
  }

  /**
   * Expands the Terminal to the initializing terminal string.
   *
   * @param {Dictionary} dictionary - the dictionary to be used as reference
   * during expansion.
   */
  expand(dictionary) {
    return this._elem;
  }

  toString() {
    return `Terminal(${this._elem})`;
  }

  equals(other) {
    if (!(other instanceof Terminal)) return false;

    return this._elem === other._elem;
  }
}

/**
 * A non-terminal is a GrammarElement that can be further expanded to expansions
 * that are not simply itself.
 */
class NonTerminal extends GrammarElement {
  /**
   * Initializes a new NonTerminal object with the non-terminal passed in.
   *
   * @param {string} nonTerminal - non-terminal string that this instance will
   * be based on.
   */
  constructor(nonTerminal) {
    super();
    this._elem = nonTerminal;
  }

  /**
   * Expands the NonTerminal by looking up its definition in the dictionary
   * provided.
   *
   * Preconditions: The key used for the non-terminal must have been defined in
   * the dictionary.
   *
   * @param {Dictionary} dictionary - the dictionary to be used as reference
   * during expansion.
   */
  expand(dictionary) {
    return dictionary.expand(this._elem);
  }

  /**
   * Verifies if the input element is a raw version of a non-terminal.
   *
   * @param {string} rawElement - Raw Element to be verified.
   */
  static isRawNonTerminal(rawElement) {
    return rawElement.startsWith("<") && rawElement.endsWith(">");
  }
  toString() {
    return `NonTerminal(${this._elem})`;
  }

  equals(other) {
    if (!(other instanceof NonTerminal)) return false;

    return this._elem === other._elem;
  }
}

/**
 * Processes and returns a possibility, which is a list of GrammarElements
 * in order.
 * TODO
 *
 * @param {string} rawPossibility - unprocessed possibility.
 * @returns a list of GrammarElements representing a possibility.
 */
class Production extends GrammarElement {
  constructor(rawPossibility) {
    super();
    const rawElems = rawPossibility.split(/<|>/g);

    const rawProduction = rawElems.map((elem, index) => {
      if (index % 2 === 0) {
        return new Terminal(elem);
      } else {
        return new NonTerminal(elem);
      }
    });

    this.possibility = rawProduction.filter(
      (elem) =>
        !elem.equals(new Terminal("")) && !elem.equals(new NonTerminal(""))
    );
  }

  expand(dictionary) {
    const expandedPossibility = generalMap(this.possibility, {
      callback: (elem) => elem.expand(dictionary),
      callbackIfFn: (fn) => fn(dictionary),
      postCallbackIfArray: compressIfFormsString,
    });

    return compressIfFormsString(expandedPossibility);
  }
}

/**
 * A defintion stores a list of possible expansions in their un-expanded forms.
 */
class Definition extends GrammarElement {
  /**
   * Initializes a new Definition object with the rawDefintion passed in.
   *
   * @param {list} rawDefinition - unprocessed list of possible expansions.
   */
  constructor(rawDefinition) {
    super();

    this._possibilities = generalMap(rawDefinition, {
      callback: (elem) => new Production(elem),
    });
  }

  /**
   * Expands the Definition by selecting a random possibility and expanding it.
   *
   * @param {Dictionary} dictionary - the dictionary to be used as reference
   * during expansion.
   */
  expand(dictionary) {
    const seed = dictionary.nextSeed();
    const selectedPossibility = this._possibilities[
      seed % this._possibilities.length
    ];

    const expandedPossibility = generalMap(selectedPossibility, {
      callback: (elem) => elem.expand(dictionary),
      callbackIfFn: (fn) => fn(dictionary),
    });

    return expandedPossibility;
  }

  toString() {
    let string = "[" + this._possibilities;
    string += "],";
    return string;
  }

  // TODO
  equals(other) {
    return false;
  }
}

export default Dictionary;
