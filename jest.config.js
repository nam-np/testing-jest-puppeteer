module.exports = {
    preset: "jest-puppeteer",
    testTimeout: 100000,
    // globals: {
    //     URL: "https://sabe.io"
    // },
    // testMatch: [
    //     "**/test/**/*.test.js"
    // ],
    verbose: true,
    runner: 'jest-serial-runner'
}