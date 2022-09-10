'use script';

// new RegExp('pattern', 'flags');

// /pattern/f

// i (register)
// g (global[all 'n' for example])
// m mnogostrochnii rejim 

// const ans = prompt('enter your name');

// const reg = /n/g;
// console.log(ans.search(reg));
// console.log(ans.match(reg));

const pass = prompt('password');

console.log(pass.replace(/./g, '*'));
console.log(pass.replace(/\./g, '*')); // prompt 'some...'
// spec / ^ & . |

console.log('12-34-56'.replace(/-/g, ':'));


const ans = prompt('enter your name');

const reg = /n/g;
console.log(reg.test(ans));

// \d - digits
// \w - words, letters
// \s - spaces = / /.g

console.log('12 fsdf 32'.replace(/ /.g, '-'));
console.log('12 fsdf 32'.replace(/ /, '-'));
console.log('12 fsdf 32'.replace(/\s/, '-'));
console.log('12 fsdf 32'.replace(/\w/g, '-'));
console.log('12 fsdf 32'.replace(/\s/g, '-')); //12-fsdf-32
console.log('12 fsdf 32'.replace(/\w/g, '-'));
// VM650:1 -- ---- --
console.log('12 fsdf 32'.replace(/\d/g, '-'));
// VM659:1 -- fsdf --

const ans = prompt('enter digits');

const reg = /\d/g;
console.log('200px'.match(reg));
// (3) ['2', '0', '0']

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
// ['R2D2', index: 11, input: 'My name is R2D2', groups: undefined]

// \D \W

console.log('My name is R2D2'.match(/\W/g));
// (3) [' ', ' ', ' ']
console.log('My name is R2D2'.match(/\D/g));
// (13) ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'R', 'D']