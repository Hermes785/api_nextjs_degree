import { NextResponse } from "next/server";
import dbconnect from "@/app/utils/dbconnect";
import userModel from "@/app/model/user.model";

dbconnect();

export async function GET(request){

    const userByid= await userModel.findById(request.url.split('/')[5]);
    console.log(userByid);
    return NextResponse.json(userByid);
}




export async function PUT(request){
   try{
  
    
    const userById= await userModel.findById(request.split('/')[5])
    if(!userById){
        return NextReponse.json({messge:'user introuvable'})
    }

    const{name,first_name ,email,password} = await request.json();

    const updateUser= await userMpdel.findByIdAnUpdate(
        userById,
        {name,
        first_name,
        email,
        password
    })
    return NextResponse.json(userUpdate)
   }
   catch(err){
    console.log(err);
    return NextResponse.json({message:'une erreur c\'est produite'})
   }

}


export async function DELETE(request){
   try{
    const userByid= await User.findById(request.split('/')[5])
    if(!userByid){
        return NextResponse.json({message: 'User not found'})
    }
    const deleteUser= await userModel.findByIdAndDelete(userByid)
    return NextResponse.json({message:'user supprimer '})

   }
   catch(err){
    console.log(err)
    return NextResponse.json({message:'un erreur c\'est produite'})
   }

}