const express=require('express');
const app=express();
const requireFilter=require('./middleware')
const route=express.Router();

route.use(requireFilter)
// const reqFilter=(req,resp,next)=>{
//     // console.log('reqFilter');
//     // next();
//     if(!req.query.age)
//     {
//         resp.send("Please provide age");
//     }
//     else if(req.query.age<18){
//         resp.send("Below 18!! You cannot access this Page");
//     }
//     else{
//         next();
//     }
// }
// app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('welcome to Home page');
})
app.get('/user',(req,resp)=>{
    resp.send('Welcome to user page');
})
route.get('/about',(req,resp)=>{
    resp.send('welcome to About Page')
})
route.get('/contact',(req,resp)=>{
    resp.send('welcome to contact page')
})
app.use('/',route)
app.listen(5000)