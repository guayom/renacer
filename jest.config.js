/* eslint-disable */

module.exports = {
    roots: ["<rootDir>/"],
    verbose: true,
    testMatch: [
        "/__tests__/**/*.+(ts|tsx|js)",
        "/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            diagnostics: false
        }
    }
};