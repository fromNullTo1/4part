//1 import {one, two} from './main';
//1 console.log(`${one} and ${two}`);

//2 import {one as first} from './main';
//2 console.log(first);

//3 import * as data from './main';
//3 console.log(`${data.one} and ${data.two}`);
//3 data.sayHi();

import sayHi from './main';
sayHi();
