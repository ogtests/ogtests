import faker from '@faker-js/faker';

export function text(length: number, seed?: number): string {
  faker.seed(seed);

  const engines = [
    () => faker.fake('{{address.streetAddress}}, {{address.cityName}} {{address.state}}'),
    () => faker.fake('{{commerce.productName}}'),
    () => faker.fake('{{commerce.productDescription}}')
  ]

  let currentLength = 0;
  let tokens: string[] = [];

  while (currentLength < length) {
    const engineId = faker.datatype.number(2);
    const token = engines[engineId]();
    tokens.push(token);
    currentLength += token.length + 1;
  }

  return tokens.join(' ')
}

export function asset(relativeUrl: string): string {
  return `https://ogtests.github.io/ogtests/dist/${relativeUrl}`;
}