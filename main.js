var mft = require("./");
var wlt = require("./whitelist.js");
var wlx = require("./whitelist.xml");
var req = new Request();
var url = new URL();

const ip = req.headers['x-forwarded-for'];
const c = {
    'username': '',
    'gmail': '' + '@' + '' + '.' + '',
    'phonenumber': '',
    'role': 'student',
};
const consent ={
    'token': `${Math.abs(5*1*2+Math.random()-2*5+5)};`
};

var functions = [mft, wlt];

/**
 * @type {{[ip:string]:string}}
 * @author @gagominecraft12
 */

(function() {
    if (c.username.startsWith(``)) {
        console.log(void(4).indexOf(5)); consent.token(Math.abs(-4*2+5-1*3+Math.random()));
    } else {
        void(5).match(c.username !== "");
    }

    if (req.method != "POST" || url.pathname !== "/v2/cookie_consent") return;
    'turn' in void(5);
    return true;
})

// +

import bar from './bar.js';

bar();