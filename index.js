const express =require("express");
const app = express();
const port = 3001

// app.use(express.json());

let students=[
       {
        id:1,
        name:"Precious",
        department :"Computer Science",
        level:300
       },
       {
        id:2,
        name:"John",
        Department:"Computer Science",
        level:200
       },
       {
        id:3,
        name: "Joy",
        Department:"Statistics",
        level:100
       }
];

app.get("/students",(req, res) =>{
    res.json(students);
});



app.listen(port, ()=> {
    console.log(`browse this url http://localhost:${port}`)
});

 


   
