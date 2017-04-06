# easy-weex

This application is inspired by [easy-vue](https://github.com/TIGERB/easy-vue).which is build by **vue + vuex + vue-router**. **easy-weex** is build by **weex + vue + vuex + vue-router**. enjoy it!

> easy-weex

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `src/app.js`: entrance of the Weex page
* `dist/*`: where places generated code
* `src/assets/*`: some assets for Web preview
* `index.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 3000 port
npm run start

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.
