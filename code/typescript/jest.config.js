module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'], // Tell Jest to resolve modules from 'src'
    testMatch: ['**/tests/**/*.test.ts'], // Ensure Jest looks for test files in the 'tests' folder
};
