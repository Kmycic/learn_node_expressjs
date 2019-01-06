const express = require('express');
const router = express.Router();
const locutus = require('locutus/php/strings');
const config = require('../config/router');

for(let type in config.urls) {
    let urls_source = config.urls[type].source;
    let urls_prefix = locutus.trim(config.urls[type].prefix, '/');

    for(let url of urls_source) {
        if(config.allowed_methods.includes(url.method) !== false) {
            let _method = url.method;
            let _pattern = url.pattern;
            let _action = url.action;

            _pattern = '/' + locutus.trim(_pattern, '/');

            if(urls_prefix) {
                _pattern = '/' + urls_prefix + _pattern;
            }

            router[_method](_pattern, _action);
        }
    }
}

module.exports = router;