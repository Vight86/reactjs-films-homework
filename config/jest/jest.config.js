module.exports = {
  clearMocks: true,
  collectCoverage: true,
  rootDir: '../../src/',
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'babel-jest',
    '\\.(scss|css)$': 'babel-jest',
  },

};
