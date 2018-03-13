## `lib` folder

Here your can write your library source code.  

### Library build

Nany uses [**babel**](https://babeljs.io/) with [`babel-preset-env`](https://babeljs.io/docs/plugins/preset-env/) as transpiler  
It creates `es`, `cjs` and `iife` to create ES, CJS and IIFE builds  
`index.js` is used as index file in your `package.json`  

### unsafe builds

If you choose **safe** build, it'll use rollup to create CJS build   
If you choose **unsafe** build, it'll use [`babel-plugin-transform-es2015-modules-simple-commonjs`](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-simple-commonjs) instead

> **WARNING:** unsafe build has reduced bundle size but there are also some caveats.  
Please, check out [**this info**](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-simple-commonjs#caveats) before use
