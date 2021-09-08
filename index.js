const fs = require('fs');
const plist = require('plist');

const requiredArgument = argumentName => { throw new Error(`ERROR: Argument ${argumentName} is required.`) }

module.exports = function(options) { 
  const path = options.path || requiredArgument('path');
  const property = options.property;
  const value = options.value;

  var plistContent = fs.readFileSync(path, 'utf8');
  const plistObject = plist.parse(plistContent);
  
  if (value) {
    // writes a new value to the file
    Object.assign(plistObject, { [property]: value });
    const newPlistStr = plist.build(plistObject);
    return fs.writeFileSync(path, newPlistStr + '\n');
  } else if (property) {
    // retrieves a certain property
    return plistObject[property];
  } else {
    // retrieves the whole file
    return plistObject;
  }
}

