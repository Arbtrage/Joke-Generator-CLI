const axios = require('axios');
const sp = require('spinnies');
const display=require('./display');

const app=async()=>{
    const spinnies=new sp();
    try {
        spinnies.add('spinner-1', { text: 'Getting your joke' });
        const {data}= await axios.get('https://v2.jokeapi.dev/joke/Any')
        display(data);
        spinnies.succeed('spinner-1', { text: 'Success!' });
    } catch (error) {
        console.log("Try again after sometime");
        spinnies.fail('spinner-1', { text: 'Fail :(' });
    }   
    console.log('');
}

module.exports=app;