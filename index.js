#!/usr/bin/env node
const init=require('./utils/start');
const fin=require('./utils/end');

const main=async()=>{
    init();
    console.log('This is a test joke');
    fin();
}

main();