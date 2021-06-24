"use strict";

// console.log("Data request");

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Preparing");
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    

//         resolve(product);
        
//     }, 2000);
// });

// req.then((product) => {
//     return req2 = new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });  
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error("Happened error");
// }).finally(() => {
//     console.log("FInally");
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() =>{
    console.log('ALl');
});

Promise.race([test(1000), test(2000)]).then(() =>{
    console.log('ALl');
});










