const axios = require('axios');

const app=async()=>{
    await axios.get('https://v2.jokeapi.dev/joke/Any')
        .then((response)=>{
            const jokeData=response.data;
            const jokeType=jokeData.type;
            if(jokeType==='single'){
                console.log('Joke:',jokeData.joke);
            }
            else{
                console.log('SetUp:',jokeData.setup);
                console.log('Delivery:',jokeData.delivery)
            }
        })
        .catch((error)=>{
            console.log(error);
        })
}

module.exports=app;