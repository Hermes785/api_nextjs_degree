import { NextResponse } from "next/server";
import dbconnect from "@/app/utils/dbconnect";
import userModel from "@/app/model/user.model";
import jwt from  "jsonwebtoken" 
import bcrypt from "bcrypt"
const secretKey = "votre_clé_secrète_pour_les_JWT";
dbconnect();

export async function POST(request){
    try{
        const {email,password}= await request.json();

        if(!email || !password){
            return NextResponse.json({message:"veullez remplir tous les champs"})
        }

    const  user= await userModel.findOne({email:email})
       
   if(!user){
    console.log('email incorrect')
    return NextResponse.json({message:"email incorrecte"})
   }


   const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        return NextResponse.json({message:"password incorrect"})
    
   }else
   {
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '30m' });
    console.log(token,user)
   return NextResponse.json({user,token})

   }

    }catch(err) {
        console.log(err);
        return NextResponse.json({message:"Une erreur est survenu"})
    }
   
}