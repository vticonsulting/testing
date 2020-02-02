module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch:
  // ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|*/**/__tests__/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  [ '**/__tests__/**/*.[jt]s?(x)', '**/src/**/?(*.)+(spec|test).[jt]s?(x)' ],
  setupFiles: ['<rootDir>/jest.init.js'],
  // setupFiles: ['<rootDir>/tests/unit/setup'],
  // globalSetup: '<rootDir>/tests/unit/global-setup',
  // globalTeardown: '<rootDir>/tests/unit/global-teardown',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/matchers'],
}
