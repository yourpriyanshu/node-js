const express=require('express')
const app=express()

app.get("",(req,resp)=>{
    resp.send(`<h1>Welcome to Home Page</h1><a href="/about">Go to About Page</a>`)
})
app.get("/about",(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="Username" value="${req.query.name}"/>
    <button>Click me</button>
    <a href="/">Go to Home Page</a>
    `)
})
app.listen(5000);