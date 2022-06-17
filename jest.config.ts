/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  coverageProvider: "v8",
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
