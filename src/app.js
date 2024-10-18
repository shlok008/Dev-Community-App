const express = require("express");
const connectDb = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
	const user = new User(req.body);
    try{
        await user.save();
    res.send("User added Successfully!")
    console.log("User saved Successfully! \n", user);
    }
    catch(error){
        res.status(400).send("error saving the user:"+error.message)
    }
});

app.get("/user", async (req,res)=>{
    const userEmail=req.body.emailId;
    try{
        const user=await User.findOne({emailId:userEmail});
        if(!user){
           res.status(400).send("User not found");
        }
        else{
            res.send(user);
        }
    }catch(error){
        res.status(400).send("Something went wrong");
    }
});


connectDb()
	.then(() => {
		console.log("Database connected successfully!");
	})
	.catch((error) => {
		console.error("Database cannot be connected");
	});
app.listen(3000, () => {
	console.log("Server is Successfully started on Port 3000");
});
