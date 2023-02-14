const endMessage=require('cli-table');

const message=()=>{
    const table=new endMessage();
    table.push({
        'Star':'https://github.com/Arbtrage/Joke-Generator-CLI'
    })
    console.log(table.toString());
}

module.exports=message;