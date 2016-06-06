# Static2JS Brunch

An experimental Brunch plugin to load "static" files in the Javascript side.

## Usage

Save your files under `app` (or other the main app path) with the extention `.static.something`,
where `something` can be for example `html`. For this example, I'm using a file called
`my_file.static.html`, that is under the main app directory. You can save your files anywhere under
the main app directory.

After that, require your file like you would do with a JS file,
but you also have to include `static`.

```js
import textFromFile from './my_file.static';
```

This can be useful when you are writing a Vue.js template and don't want to lose
HTML syntax highlight.

## Installation

```
npm install philss/static2js-brunch --save-dev
```

## License

The MIT License (MIT)
Copyright (c) 2016 Philip Sampaio Silva

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
