console.log('Starting app');


const fs = require('fs');
const os = require('os');
let user = os.userInfo();
fs.appendFile('greeting.txt', 'Hello '+user.username+' !', (e) => {
    if (e) {
        console.log('Unable to write');
    }
});

