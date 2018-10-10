/**
 * Created by Administrator on 2018/9/26.
 */
let buf=new Buffer(10);
console.log(buf);
const buf1=Buffer.from("°Ö°Ö","UTF-8");
console.log(buf1);
console.log(buf1.length);
console.log(buf1.toString());

let buf2=Buffer.alloc(10);

buf2[1]=10;
buf2[3]=14;
buf2[15]=11;
console.log(buf2);
buf2.forEach((item,index)=>{
    console.log(item+","+index);
});