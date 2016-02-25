# lokal
A sane way to handle local imports for npm and node.
```js
const myDependency = require('lokal')('myDependency');
```

## Motivation

By default, local imports look like this in Node.js:

```js
const myModule = require('./../../myFolder/myFile.js');
```

This is unwieldy for a number of reasons:
  * Importing the same file in different places requires a different path.
  * Moving a file requires updating all imports in the file.
  * Moving the file requires updating all files that import it.
  * Other languages/environments have spoiled us.

## Install
```
npm install lokal --save
```

## Usage
Add the following to your `package.json` file. Note that all of the standard path formats for `require()` are accepted:

```json
"localDependencies": {
  "dependency1": "test/dependency1/",
  "dependency-2": "/test/dependency2/dependency2.js",
  "dependency3": "test/dependency3/nested/index.js"
}
```

Import your local dependency like this:

```js
const dependency1 = require('lokal')('dependency1');
const dependency2 = require('lokal')('dependency-2');
```

A second parameter can be specified as an alternative to require(). For example, to rewire a dependency for writing tests.
```js
const rewire = require('rewire');
const rewiredDependency3 = require('lokal')('dependency3', rewire);
```

Now when you move a file, the import path only needs to be updated in one place. Additionally, the name used to identify the file as a local dependency in `package.json` is not tied directly to the file path or file name. It can also be helpful to have a complete list of local dependencies in one location.
