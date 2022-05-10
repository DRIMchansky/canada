const ENVS = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
}

const env = process.env.NODE_ENV || ENVS.PRODUCTION
const isProd = env === ENVS.PRODUCTION
const isDev = !isProd

module.exports = Object.freeze({
    isProd,
    isDev
})
