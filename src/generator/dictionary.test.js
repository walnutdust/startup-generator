import Dictionary from "generator/dictionary";
import Random from "generator/random";

const rawRules = {
  shortSentence: ["<noun> <verb>"],
  sentence: ["<noun> <verb> <dative>"],
  complexSentence: ["<modifiedNoun> <modifiedVerb>"],
  noun: ["John"],
  nounAlias: ["<noun>"],
  adjective: ["Happy"],
  adverb: ["quickly"],
  modifiedNoun: ["<adjective> <noun>"],
  modifiedVerb: ["<verb> <adverb>"],
  verb: ["walked"],
  dative: ["there"],
  sentenceArray: [["<sentence>"]],
  object: [{ name: "<noun>", sentence: "<shortSentence>" }],
  objects: [["<object>", "<object>"]],
  aObject: ["<object>"],
  randomNumber: [(dictionary) => dictionary.nextSeed()],
  randomSentence: ["Your number is <randomNumber>"],
};

test("expands terminals properly", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));
  expect(dictionary.expand("noun")).toEqual("John");
});

test("expands nonterminals properly (short sentence)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("shortSentence")).toEqual("John walked");
});

test("expands nonterminals properly (alias)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("nounAlias")).toEqual("John");
});

test("expands nonterminals properly (sentence)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("sentence")).toEqual("John walked there");
});

test("expands nonterminals properly (complex sentence)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("complexSentence")).toEqual(
    "Happy John walked quickly"
  );
});

test("expands nonterminals properly (sentence array)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("sentenceArray")).toEqual(["John walked there"]);
});

test("expands nonterminals properly (non-sentence, basic)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("object")).toEqual({
    name: "John",
    sentence: "John walked",
  });
});

test("expands nonterminals properly (non-sentence)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("aObject")).toEqual({
    name: "John",
    sentence: "John walked",
  });
});

test("expands nonterminals properly (non-sentence, 2)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("objects")).toEqual([
    { name: "John", sentence: "John walked" },
    { name: "John", sentence: "John walked" },
  ]);
});

test("expands nonterminals properly (random)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("randomNumber")).toEqual(2);
});

test("expands nonterminals properly (random number in sentence)", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(dictionary.expand("randomSentence")).toEqual("Your Number is 3");
});

test("throws error on invalid expansion", () => {
  const dictionary = new Dictionary(rawRules, new Random(0));

  expect(() => dictionary.expand("c")).toThrowError();
});
