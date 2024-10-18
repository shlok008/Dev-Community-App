const mongoose=require("mongoose")

const connectDb= async ()=>{
    await mongoose.connect(
		"mongodb+srv://shlokaggarwal008:PTRGVcsjPHFIwPSF@cluster0.sgol7ii.mongodb.net/"
	);
}



module.exports=connectDb;