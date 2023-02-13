#!/usr/bin/env node
const init=require('./utils/start');
const fin=require('./utils/end');
const joke=require('./utils/joke');
const main=async()=>{
    init();
    await joke();
    fin();
}

main();