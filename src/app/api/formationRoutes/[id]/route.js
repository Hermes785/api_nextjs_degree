import formationModel from "@/app/model/formation.model";
import dbconnect from "@/app/utils/dbconnect";

dbconnect();

import { NextResponse } from "next/server";



export async function PUT(request) {
    try {
        const TraningId = await formationModel.findById(request.url.split("/")[5])
        console.log(TraningId);


        if (!TraningId) {
            return NextResponse.json({ message: "Formation introuvable" });

        }

        const { title, description, duration, outlet, price, city } = await request.json();
        const updateTranig = await formationModel.findByIdAndUpdate(
            TraningId,
            {
                title,
                description,
                duration,
                outlet, price,
                city
            })
        console.log(updateTranig);
        return NextResponse.json(updateTranig)
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Une erreur est survenue lors de la modification ' })
    }
}


export async function DELETE(request) {
  try {
     const traingId = await formationModel.findById(request.url.split('/')[5])

    if (!traingId) {
        return NextResponse.json({ message: 'formation non trouver' })
    }

    const deleteTraining= await formationModel.findByIdAndDelete(traingId);
    console.log('suprimer avec succes')
    return NextResponse.json({message:'formation supprimer avec succes'})
}
catch (err){
    console.log(err)
    return NextResponse.json({message:'Une erreur est survenue'})
}
}


export async function GET(request){ 
    const trainingById= await formation.Mode.finfById(request.url.split('/')[5])
    return NextResponse.json(trainbingId)
}

   
