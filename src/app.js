const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs");
const port =process.env.PORT || 3000;
// public static path
const staticPath = (path.join(__dirname, "../public"))
const tempPath = (path.join(__dirname, "../templates/views"))
const partialsPath = (path.join(__dirname, "../partials"))
app.set('view engine', 'hbs');
app.set('views', tempPath);
app.use(express.static(staticPath))
hbs.registerPartials(partialsPath);
app.get("", (req, res)=>{
   res.render('index')
})
 app.get("/about", (req, res)=>{
    res.render('about');
 })
 app.get("/weather", (req, res)=>{
    res.render('weather');
 })
 app.get("*", (req, res)=>{
    res.render('404eror');
 })

 app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
 })