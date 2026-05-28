import { config as baseConfig } from '../wdio.conf.js'

export const config = {
    ...baseConfig,

    specs: [
        '../test/specs/**/*.spec.js'
    ],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--width=1920',
                    '--height=1240',
                ],
                prefs: {
                    'intl.accept_languages': 'en-US',
                },
            },
        },
    ],
}