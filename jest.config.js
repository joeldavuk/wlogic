module.exports = {
  verbose: true,
  modulePaths: ["<rootDir>/__tests__", "<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.test.ts"],
  testTimeout: 30000,
};
