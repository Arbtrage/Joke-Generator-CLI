const endMessage=require('cli-table');
const c = require('ansi-colors');

const message=()=>{
    const table=new endMessage();
    const lnk=c.dim('https://github.com/Arbtrage/Joke-Generator-CLI');
    table.push({
        Star:`${lnk}`
    })
    console.log(table.toString());
}

module.exports=message;