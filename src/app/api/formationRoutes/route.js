import { NextResponse } from "next/server";
import formationModel from "@/app/model/formation.model";
import dbconnect from "@/app/utils/dbconnect";

dbconnect();

export async function POST(request) {
  try { 
    const { title, description, duration, outlet, price, city } = await request.json();

    const newTraining = new formationModel({
      title,
      description,
      duration,
      outlet,
      price,
      city
    });

    //  vérifier si les champs sont remplis ici
    /*if (!title || !description || !duration || !outlet || !price || !city) {
      return NextResponse.json({ message: "Veuillez remplir tous les champs" });
    }
*/
    await newTraining.save();
    console.log(newTraining);

    return NextResponse.json({ message: "Formation ajoutée avec succès", data: newTraining });
  }  
  catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Une erreur s'est produite lors de l'ajout de la formation" });
  }
}

export async function GET(request){
    const AllTraining = await formationModel.find();
    return NextResponse.json(AllTraining)
}

