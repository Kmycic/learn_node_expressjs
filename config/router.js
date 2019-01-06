module.exports = {
    allowed_methods: [
        'get',
        'post',
        'put',
        'delete'
    ],

    urls: {
        web: {
            source: require('../router/routes/web'),
            prefix: '', // auto removing first and last slashes
            name_prefix: '' // for named routing - TODO
        },

        api: {
            source: require('../router/routes/api'),
            prefix: '/api',
            name_prefix: 'api' // 'api' is equivalent to 'api.'
        }
    }
}