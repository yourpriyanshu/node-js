const fs=require('fs')
const path=require('path')
const direPath=path.join(__dirname,'files')

// console.log(direPath)

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(direPath+"/hello"+i+".txt","a simple text file")
// }

fs.readdir(direPath,(err,files)=>{
    //   console.log(files)
    files.forEach((item) => {
         console.log("file name is ",item)
    });
})

