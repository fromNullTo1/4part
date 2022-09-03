'use strict';

// console.log('data request ...');
// setTimeout(() => {
//   console.log('data preparation ...');

//   const product = {
//     name: 'TV',
//     price: 2000
//   };

//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);
// }, 2000);


console.log('data request ...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('data preparation ...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

// req.then((product) => {
//   const req2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//    });
//    req2.then(data => {
//     console.log(data)
//    });
// });

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    console.log(data)
});