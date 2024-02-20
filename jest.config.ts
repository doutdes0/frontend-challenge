import { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/", "assets"],
  rootDir: "src",
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [151001],
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png|svg)$": "identity-obj-proxy",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};

export default config;
