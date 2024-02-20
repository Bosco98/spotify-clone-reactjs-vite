export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
//   setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
//   transformIgnorePatterns: ["node_modules/(?!lit-html)"],
  globals: {
    "ts-jest": {
      tsConfig: {
        allowJs: true,
      },
    },
  }
};
