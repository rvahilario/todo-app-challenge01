module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)?'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
};
