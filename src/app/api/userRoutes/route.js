import { NextResponse } from "next/server";
import userModel from "@/app/model/user.model";
import bcrypt from "bcrypt"
import dbconnect from "@/app/utils/dbconnect";

dbconnect()

export async function POST(request){
  try{  
    
    const{name,first_name ,email,password} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const newUser= new userModel({
        name,
        first_name ,
        email,
        password:hashedPassword 
    })
  await newUser.save();
    return NextResponse.json(newUser);
}
catch (err) {
console.log(err);
return NextResponse.json({message:"Une erreur est survenue"})
}
}



export async function GET(request){
   try{ const AllUser= await userModel.find();
    return NextResponse.json(AllUser)}
    catch(err){
        console.log(err);
        return NextResponse.json("une erruer est survenue")

    }
}