const name1 = "husnain";
const name2 = "name 2";
const names = {name1,name2};
const sayHi = (name)=>{
    console.log(`hello, ${name}`);
}
sayHi("Hux");
console.log(require('os').userInfo());
console.log(require('os').freemem());
console.log(require('os').uptime());
const path = require('path');
const dir = 'users';
const filename = 'file.txt'
let fullpath = path.join(dir,filename);
console.log(fullpath);
//extension 
console.log(path.extname(fullpath));
if(path.extname(fullpath) == '.txt'){
    console.log("it's a text file")
}else{
    console.log('not a text file')
}

// Define some path segments
const projectRoot = __dirname;
const logsDirectory = 'logs';
const logFile = 'app.js';

// Create an absolute path to the log file
const logFilePath = path.resolve(projectRoot, logsDirectory, logFile);

// Extracting information from the path
const directoryName = path.dirname(logFilePath);
const baseName = path.basename(logFilePath);
const extension = path.extname(logFilePath);

// Output the results
// console.log('Project Root:', projectRoot);
// console.log('Log File Path:', logFilePath);
// console.log('Directory Name:', directoryName);
// console.log('Base Name:', baseName);
// console.log('Extension:', extension);



const fs = require('fs');
// fs.writeFileSync('./hello.txt'," writing again",{flag : 'a'});
// console.log(fs.readFileSync('./hello.txt','utf-8'));
// if(fs.readFileSync('./hello.txt','utf-8') == "writing"){
//     console.log("success");
// }
fs.readFile('./hello.txt','utf-8',(err,result)=>{

    fs.readFile('./hello2.txt','utf-8',(err,results)=>{res2 = results;          // swapping data b/w two text files 
        fs.writeFile('./hello2.txt',result,()=>{})
        fs.writeFile('./hello.txt',results,()=>{})
        
    })

})
let http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to the homepage")
    }else if (req.url === "/about"){
        console.log("welcome to the about section")
        res.end("welcome to the about section");
    }else if(req.url === "/contact"){
        res.end("welcome to the contact page")
    }else{
        res.end("the page does not exist")
    }
})
server.listen(5000);
module.exports =  {names,sayHi};