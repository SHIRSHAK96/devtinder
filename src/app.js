const express= require("express");
const app=express();
app.use("/test", (req,res) => {
    res.send("HELLO FROM THE SERVER!!");
});
app.use("/hello", (req,res) => {
    res.send("HELLO HELLO HELLO !!");
});
app.use("/", (req,res) => {
    res.send("NAMASTE FROM THE DASHBOARD!!");
});
//all of these are request handlers and "/test","/hello" etc. are routes which i added
app.listen(7777,() => {
    console.log("Server is listening on port 7777");
});
//