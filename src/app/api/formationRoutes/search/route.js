import formationModel from "@/app/model/formation.model";
import dbconnect from "@/app/utils/dbconnect";
import { NextResponse } from "next/server";

dbconnect();

export async function POST(request) {
    try {
        const search = await request.json();
        if (search) {
            
                const searchResult = await formationModel.find({
                    $or: [
                        { title: { $regex: `${search}`, $options: "i" } },
                        { city: { $regex: `${search}`, $options: 'i' } },
                    ]
                });

                return NextResponse.json(searchResult);
            
        } else {
            return NextResponse.json({ message: `${search} ne coresspond pas` });
        }
    } 
    catch (err) {
        console.log(err);
        return NextResponse.json({ message: "une erreur a survenue" });
    }
}
