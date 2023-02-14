const c = require('ansi-colors');

const disp = (data) => {
  const jokeData = data;
  const jokeType = jokeData.type;
  if (jokeType === "single") {
    console.log(c.green.bold("Joke:"), jokeData.joke);
  } else {
    console.log(c.green.bold("SetUp:"), jokeData.setup);
    console.log(c.yellow.bold("Delivery:"), jokeData.delivery);
  }
  console.log('');
};
module.exports=disp;