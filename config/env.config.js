import dotenv from 'dotenv'

dotenv.config()

export const envConfig = {
    baseUrl: process.env.BASE_URL || 'https://telnyx.com',
    portalUrl: process.env.PORTAL_URL || 'https://portal.telnyx.com',
    developersUrl: process.env.DEVELOPERS_URL || 'https://developers.telnyx.com',
    setiUrl: process.env.SETI_URL || 'https://seti.telnyx.com',
    environment: process.env.NODE_ENV || 'local',
}