// const http = require('http')

// const fs = require('fs')

// // const readStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8')
// // const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt')
// // readStream.on('data' , (chunk)=>{
// //   console.log("chunk of data by readStream ")
// //   writeStream.write(chunk)
// // })  

// const server = http.createServer((req,res)=>{
//     if(req.url === '/home' || req.url === '/'){
//       const readStream = fs.createReadStream(__dirname + '/index.html' , 'utf8')
//       readStream.pipe(res)
//     }
//     else if(req.url === '/about'){
//       const readStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8')
//       readStream.pipe(res)
//     }
//     else{
//       res.end("404 error")
//     }

// });
// server.listen(3000, ()=>{
//   console.log("Server is running on port 3000")
// })