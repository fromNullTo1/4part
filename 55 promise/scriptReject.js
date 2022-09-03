'use strict';

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

req.then((product) => {
    return new Promise((resolve, rejeсt) => {
        setTimeout(() => {
            product.status = 'order';
            rejeсt();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;    
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('Error');
});
