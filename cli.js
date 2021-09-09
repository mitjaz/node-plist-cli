#!/usr/bin/env node

const plistTool = require('./index');

try {
    const args = process.argv.slice(2);
    const [path, property, value] = args;
    const result = plistTool({ path, property, value});    
    const resultString = typeof result === 'object' ? JSON.stringify(result, null, 2) : result;
    console.log(resultString)
} catch (error) {
    console.error(error.message);
}
