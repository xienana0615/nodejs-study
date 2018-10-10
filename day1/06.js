/**
 * Created by Administrator on 2018/9/26.
 */
/*
const fs=require("fs");
let fd=fs.openSync("D:\\nodeStudy\\day1\\js\\myFunc.js","a");
console.log(fd);
fs.writeSync(fd,"nanababa","UTF-8");
fs.closeSync(fd);*/
/*const fs=require("fs");
fs.open("D:\\nodeStudy\\day1\\js\\myFunc.js","a",(err,fd)=>{
        //判断是否出错
        if(!err){
            fs.writeFile(fd,"bbb",(err)=>{
              if(!err){
                console.log("写入文件成功")
                }else{
                    throw err;
                }
            });
            fs.close(fd,(err)=>{
                if(!err){
                console.log("关闭文件成功")
            }else{
                throw err;
            }
            })
        }else{
            throw err;
        }
    });
console.log("gagaga");*/
/*const fs=require("fs");
//创建一个写入流
let ws=fs.createWriteStream("D:\\nodeStudy\\day1\\js\\myFunc.js");
//console.log(fs);
//打开通道
ws.once("open",()=>{
    console.log("通道已经打开")

});
//关闭通道
ws.once("close",()=>{
        console.log("通道已经关闭")

});
//写入内容
ws.write("要写入的内容1");
ws.write("要写入的内容2");
ws.write("要写入的内容3");
//关闭通道
ws.end()*/
/*const fs=require("fs");
//读取文件
fs.readFile("D:\\nodeStudy\\day1\\js\\myFunc.js",(err,data) =>{
    if(!err){
        console.log(data);
       console.log(data.toString());
        //对于图片文件，写入图片文件
         fs.writeFile("img.jpg",data,(err)=>{
             if(!err){
                "写入图片成功"
                     }else{
                throw err;
            }
         });
    }else{
        throw err;
    }
});*/
/*const fs=require("fs");
//创建读入流
let rs=fs.createReadStream("D:\\nodeStudy\\day1\\js\\myFunc.js");
//创建写入流
let ws=fs.createWriteStream("myFuncs.js");
//监听流的打开和关闭
rs.once("open",()=>{
    console.log("写入通道已经打开");
});
rs.once("close",()=>{
    console.log("写入通道已经关闭");
});
ws.once("open",()=>{
    console.log("读入通道已经打开");
});
ws.once("close",()=>{
    console.log("读入通道已经关闭");
});
//绑定data
rs.on("data",(data)=>{
console.log(data);
ws.write(data);
});*/
const fs=require("fs");
 //创建读入流
 let rs=fs.createReadStream("D:\\nodeStudy\\day1\\js\\myFunc.js");
 //创建写入流
 let ws=fs.createWriteStream("myFuncs.js");
//创建管道
rs.pipe(ws);