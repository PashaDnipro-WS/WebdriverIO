import { config as baseConfig } from '../wdio.conf.js'

export const config = {
    ...baseConfig,

    specs: [
        '../test/specs/**/*.spec.js'
    ],

    maxInstances: process.env.CI ? 1 : 3,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--lang=en-US',
                    '--window-size=1920,1240',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-extensions',
                    '--disable-infobars',
                    ...(process.env.CI ? ['--headless=new'] : []),
                ],
            },
        },
    ],
}