const express=require("express");
const bodyParser=require("body-parser");
const https=require(https);

// apikey 6745ced79873af66d0ffc69446b61215-us1

//86ec72a85f

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
 res.sendFile(__dirname+"/signup.html");
});

app.post("/",function (req,res) {
    var firstName=req.body.fname;
    var lastName=req.body.lname;
    var email=req.body.email;
    
    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields: {
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    }

    var jsonData= JSON.stringify(data);
    var url="https://us1.api.mailchimp.com/3.0/";
    https.request()
    
})

app.listen(3000,function () {
    console.log("server running at port 3000");
    
});

