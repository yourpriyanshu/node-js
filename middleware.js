module.exports=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please provide age");
    }
    else if(req.query.age<18){
        resp.send("Below 18!! You cannot access this Page");
    }
    else{
        next();
    }
}