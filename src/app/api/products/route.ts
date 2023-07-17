import fs from 'fs';
import path from 'path';
import {Request} from "next/dist/compiled/@edge-runtime/primitives";
import {NextRequest, NextResponse} from "next/server";
import {Product} from "@/types";


export async function GET(request: NextRequest) {

    const filePath = path.join(process.cwd(), 'data.json');
    const rawData = fs.readFileSync(filePath);
    const products = JSON.parse(rawData.toString());
    return new NextResponse(JSON.stringify(products));
}

export async function POST(request: NextRequest) {
    const filePath = path.join(process.cwd(), 'data.json');

    const newProduct: Product = await request.json();


    const currentData = JSON.parse(fs.readFileSync(filePath).toString());



    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));



    return new NextResponse(JSON.stringify(newProduct));
}