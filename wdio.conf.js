export const config = {
    suites: {
        regression: [
            './test/specs/**/*.spec.js'
        ],
    },

    runner: 'local',

    specs: [
        './test/specs/**/*.spec.js'
    ],

    exclude: [],

    maxInstances: 10,

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}