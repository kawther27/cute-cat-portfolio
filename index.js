import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


  //rendering the home page
app.get('/',(req,res)=> {
  res.render("index.ejs")

})

// rendering about page
app.get('/about',(req,res)=> {
res.render("about.ejs")
})

//redering contact page
 app.get('/contact',(req,res)=> {
  res.render("contact.ejs")
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
