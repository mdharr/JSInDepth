const fs = require('fs-extra') // CommonJS syntax
// import fs from 'fs-extra' // ESModule syntax

const path = 'hello.txt'

fs.outputFileSync(path, "Hello, from NodeJS!")