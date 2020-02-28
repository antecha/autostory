// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(test).js?(x)'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js?(x)', '!<rootDir>/**/*.stories.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'text', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
