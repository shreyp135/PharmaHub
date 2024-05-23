//requires
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");

//middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))




//routes 

//homepage
app.get("/", async (req, res) => {
    res.render("home.ejs");
  });
//medicines
app.get("/medicines",async(req,res)=>{
    res.render("medicines.ejs");
});
//insurance
app.get("/insurance",async(req,res)=>{
    res.render("insurance.ejs");
});
app.post("/insurance", async(req,res)=>{
    res.redirect("/");
  });
//doctorConsult
app.get("/doctorConsult", async(req,res)=>{
    res.render("doctorConsult.ejs");
});

//doctorregister
app.get("/doctorRegister",async(req,res)=>{
    res.render("doctorRegister.ejs")
});
app.post("/doctorRegister", async(req,res)=>{
    res.redirect("/");
  });

//chemistRegister
app.get("/chemistRegister",async(req,res)=>{
    res.render("chemistRegister.ejs")
});
app.post("/chemistRegister", async(req,res)=>{
    res.redirect("/");
  });
//insuranceRegister
app.get("/insuranceCompanyRegister",async(req,res)=>{
    res.render("insuranceCompanyRegister.ejs")
});
app.post("/insuranceCompanyRegister", async(req,res)=>{
    res.redirect("/");
  });

//login routes

//get route for login
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

//post route for login
app.post("/login", async(req,res)=>{
    res.redirect("/");
  });







app.listen(8080, () => {
    console.log("server has started on port 8080");
  });