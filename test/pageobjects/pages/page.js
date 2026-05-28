import { envConfig } from '../../../config/env.config.js'

export default class Page {
    open(path) {
        return browser.url(`${envConfig.baseUrl}/${path}`)
    }
}
