const express=require('express')
const app = express()
const port=5000
const path=require('path')
const hour=new Date().getHours()
const day=new Date().getDay()


app.use(express.json())
app.listen(port,console.log(`server is running at ${port}`))
const middle=(req,res,next)=>{
    if(hour<=9|| hour>=17 || day<=1 || day>=6){
        res.send("we are closed")
    }else{
        next()
    }
}
app.get('/',middle,(req,res)=>{
  res.sendFile(path.join(__dirname,'public','home.html')) 
})
app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','style.css'))
})
app.get("/contact",middle,(req,res)=>{

    res.sendFile(path.join(__dirname,"public","contact.html"))
    
})
app.get("/services",middle,(req,res)=>{
    
    res.sendFile(path.join(__dirname,"public","services.html"))

})