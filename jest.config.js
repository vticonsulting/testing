module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch:
  // ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|*/**/__tests__/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  [ '**/__tests__/**/*.[jt]s?(x)', '**/src/components/**/?(*.)+(spec|test).[jt]s?(x)' ],
}
