import formationModel from "@/app/model/formation.model";
import dbconnect from "@/app/utils/dbconnect";

dbconnect();

import { NextResponse } from "next/server";


export default async function PUT(request){
try
 { 
      const TraningId= await formationModel.findById(request.url.split("/"))
    if (!TraningId) {
        return NextResponse.json({message: "Formation introuvable"});

    }
    const { title, description, duration, outlet, price, city } = await request.json();
    const updateTranig = await formationModel.findByidAndUpdate({_id:id},title, description, duration, outlet, price, city)
  console.log.log(updateTranig);
   return NextResponse.json({message:'formation modidifier avec succes'})
}
catch (err){
    console.log(err);
    return NextResponse.json({message:'Ube erreur est survenue lors de la modification '})
}
}