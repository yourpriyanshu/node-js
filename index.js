// const express=require('express')
// const path=require('path')
// const app=express()
// const publicPath=path.join(__dirname,'Lecture21')
// // app.use(express.static('Public'))
// app.set('view engine','ejs')
// app.get('/',(_,resp)=>{
//     resp.sendFile(`${publicPath}/Public/index.html`)
// })
// app.get("/about",(_,resp)=>{
//     resp.sendFile(`${publicPath}/Public/about.html`)
// })
// app.get("/profile",(_,resp)=>{
//     const user={
//         name:'Priyanshu Kumar',
//         email:'priyaynshukumarkota@gmail.com',
//         nation:'India',
//         skills:['C','C++','HTML','CSS','Javascript']
//     }
//    resp.render('profile',{user})
// })
// app.get('/login',(_,resp)=>{
//     resp.render('login')
// })
// app.get("/help",(_,resp)=>{
//     resp.sendFile(`${publicPath}/Public/help.html`)
// })
// app.get("/*",(_,resp)=>{
//     resp.sendFile(`${publicPath}/Public/nopage.html`)
// })
// app.listen(5000); 

