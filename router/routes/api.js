module.exports = [
    {
        name: 'api_root',
        method: 'get',
        pattern: '/',
        action: (req, res) => {
            res.send('Robi api');
        }
    },
];