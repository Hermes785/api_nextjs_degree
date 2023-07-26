import { NextResponse } from "next/server";
import dbconnect from "@/app/utils/dbconnect";
import userModel from "@/app/model/user.model";

dbconnect();

export async function GET(request){

    const user= await userModel.findById(request.url);
    console.log(user);
}