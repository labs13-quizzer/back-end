require('dotenv').config();
const server = require('./api/server.js');

server.listen(process.env.PORT || 5000, () => {
    console.log(`\n** Server is UP on 5000 **\n`)
})
