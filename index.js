// const express = require('express');
// const app = express();
// port = 5000;

// app.listen(port,()=>{
//     console.log("server started at " + port)
// })

// function sum(n){
//     let ans = 0;
//     // console.log("this is sum");
//     for(let i=0;i<n;i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// app.get('/',function (req,res){
//     const n = req.query.n;
//     const ans = sum(n);

//     // console.log(ans);
//     // res.send("hi all");
//     res.send("This is ans " + ans);

// })






const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());
port = 3000;
app.listen(port,()=>{
    console.log("server started at " + port)
})
var users = [{
    name:"Gagan Sharma",
    kidneys:[{
        health:false
    }]
}];

app.get('/',function (req,res){
    const gaganKidney = users[0].kidneys;
    const noOfKidneys = gaganKidney.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<noOfKidneys;i++){
        if(gaganKidney[i].health){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    let numberOfunHealthyKidneys = noOfKidneys - numberOfHealthyKidneys;
    console.log(gaganKidney);
    res.json({
        gaganKidney,
        noOfKidneys,
        numberOfHealthyKidneys,
        numberOfunHealthyKidneys
    });
    
})

app.post('/',function (req,res){
    const isHealthy = req.body.isHealthy;
    let tessssst = req.body.test;
    tessssst = "333333"
    
    users[0].kidneys.push({
        health: isHealthy
    })
    res.json({
       msg:"Done",
       testing:tessssst,
    });
})

app.put("/",function (req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].health = true;
    }
    res.json({});
})

//removing all unhealthy kidneys
app.delete("/",function (req,res){
    
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].health){
            newKidneys.push({
                health:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg:"deletedone"});
})