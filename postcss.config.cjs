const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import-alias')({
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        })
    ]
};