const endMessage=require('cli-table');

const message=()=>{
    const table=new endMessage();
    table.push({
        'Bye':'Thank you for using this'
    })
    console.log(table.toString());
}

module.exports=message;