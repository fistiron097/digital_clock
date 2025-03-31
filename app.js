//Using await inside an async function:
//Create an async function that waits 2 seconds before returning "Data received!". Use setTimeout inside a Promise.

// async function dataGet(){
//     let data = new Promise((resolve) => setTimeout(() => resolve("Data Recived"), 1000));
//     let stream = await data;
//     console.log(stream);
//     let data1 = new Promise((resolve) => setTimeout(() => resolve("Data Recived 2"), 2000));
//     let stream1 = await data1;
//     console.log(stream1);
// }
// dataGet();

    // const fs = require("fs");

    // function readTheFile(sendTheFinalValueHere){
    //     fs.readFile("a.txt","utf-8", function(err,data){
    //         sendTheFinalValueHere(data.trim());
    //     })
    // }

    // function readFile(fileName){
    //     return new Promise(readTheFile);
    // }

    // const p = readFile();

    // function callback(contents) {
    //     console.log(contents);
    // }

    // p.then(callback);

// function asyncDoOp(resolve){
//     setTimeout(resolve, 3000);
// }

// function promisifiedVersion(){
//     return new Promise(asyncDoOp);
// }

// let p = promisifiedVersion();

// function callback(){
//     console.log("Hi I am PROMISE");
// }

// p.then(callback);

// const fs = require("fs");

// function doAsyncOp(content){
//     fs.readFile("a.txt","utf-8", function(err,res) {
//         content(res.trim());
//     })
// }

// function promisifiedVersion(){
//     return new Promise(doAsyncOp);
// }

// let p = promisifiedVersion();

// function callback(data){
//    console.log(data);
// }

// p.then(callback);

// Assignment -1

// const fs = require('fs');


// const cleanFile = (filePath) => {

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }

//         const cleanedContent = data.replace(/\s+/g, ' ').trim();

//         fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error writing to the file:', err);
//                 return;
//             }
//             console.log('File cleaned successfully.');
//         });
//     });
// };


// const filePath = 'a.txt'; 
// cleanFile(filePath);

// const fs = require('fs');
// const { setInterval } = require('timers/promises');

// Function to read a file asynchronously
// fs.readFile('a.txt', 'utf8', (err, data) => {
//   if (err) {
//     if (err.code === 'ENOENT') {
//       console.error('Error: File not found!');
//     } else {
//       console.error('Error reading file:', err);
//     }
//     return;
//   }
//   console.log('File contents:', data);
// });

// // Expensive operation: A simple, large computational task
// const expensiveOperation = () => {
//   let sum = 0;
//   for (let i = 0; i < 1e8; i++) { 
//     sum += i;
//   }
//   console.log('Expensive operation done');
// };


// expensiveOperation();

//        Create Clock 
// let second = 0;
// let hour = 11;
// let minute = 59;
// let str1 = "AM";
// setInterval(() => {
//     if(second === 59){
//         minute++;
//         second = -1;
//     }
//     if(hour === 24){
//         hour = 0;
//         str1 = "AM";
//     }
//     if(hour === 12){
//         str1 = "PM"
//     }
//     if(minute === 60){
//         minute = 0;
//         hour++;
//     }
//     second++;
//     console.log(hour +":"+ minute + ":" + second + str1);
// },1000)

//counter(1,0); // Start with count = 0
  
let counter = 0;

const updateClock = () => {
    const now = new Date();

    // 24-hour format
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // 12-hour format
    const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);

    setTimeout(updateClock, 1000);
};

updateClock();