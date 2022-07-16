// console.log(sum(1,2));

// IIFE
// console.log(math.sum(1,2));

// CommonJS
// const sum = require('./math');
// console.log(sum(1,2));

//ES2016 표준 모듈
import * as math from './math.js';
console.log(math.sum(1,2))