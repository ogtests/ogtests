import faker from '@faker-js/faker';

export function generateNonsense(length: number): string {
  const engines = [
    () => faker.word.adjective(),
    () => faker.word.adverb(),
    () => faker.word.conjunction(),
    () => faker.word.interjection(),
    () => faker.word.noun(),
    () => faker.word.preposition(),
    () => faker.word.verb(),
  ]

  let currentLength = 0;
  let tokens: string[] = [];

  while (currentLength < length) {
    const engineId = Math.floor(Math.random() * engines.length);
    const token = engines[engineId]();
    tokens.push(token);
    currentLength += token.length + 1;
  }

  return tokens.join(' ')
}