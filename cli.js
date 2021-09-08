#!/usr/bin/env node

const plistTool = require('./index');

try {
    const args = process.argv.slice(2);
    const [path, property, value] = args;
    const result = plistTool({ path, property, value});    
    console.log(JSON.stringify(result, null, 2))
} catch (error) {
    console.error(error.message);
}
