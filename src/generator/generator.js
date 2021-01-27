import Dictionary from "generator/dictionary";
import Random from "generator/random";

import rawRules from "generator/config";

class Generator {
  #random;
  #dictionary;
  #startUp;

  constructor(seed = 0) {
    this.#random = new Random(seed);
    this.#dictionary = new Dictionary(rawRules, this.#random);

    const startUpName = this.#dictionary.expand("startUpName");
    this.#dictionary.setDefinition("startUpName", [startUpName]);
  }

  initialize() {
    if (!this.#startUp) {
      this.#startUp = this.#dictionary.expand("startUp");
    }

    return [this.#random, this.#startUp];
  }

  pageElements() {
    return this.#dictionary.expand("pageElements");
  }
}

export default Generator;
