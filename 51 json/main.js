'use strict';

const persone = {
  name: 'Alex',
  tel: '+78005252525',
  parents: {
    mom: 'Anna',
    dad: 'Andrey'
  }
};

console.log(JSON.parse(JSON.stringify(persone)));
console.log(JSON.stringify(persone));
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Olga';
console.log(persone);
console.log(clone);
