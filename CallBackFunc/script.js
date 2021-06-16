"use strict";

function one () {
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function sec() {
    console.log(532);
}

one();
sec();

function learning(str, callback) {
    console.log(`I learn: ${str}`);
    callback();
}

learning("js", sec);