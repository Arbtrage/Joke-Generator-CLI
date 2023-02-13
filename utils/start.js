const pkgJson=require('../package.json');
const welcome = require('cli-welcome');

const init=()=>{
    welcome({
        title: `Welcome to jokes generator`,
        tagLine: `by Sayantan`,
        description:`${pkgJson.description}`,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `v1.0`
    });
};

module.exports=init;