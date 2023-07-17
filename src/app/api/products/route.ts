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

    // Read and parse the current data
    const rawData = fs.readFileSync(filePath);
    const currentData = JSON.parse(rawData.toString());

    // If there are already products, set the id to one more than the last product's id
    // If there are no products, set the id to 1
    if(currentData && currentData.length > 0 && Array.isArray(currentData)){
        newProduct.id = currentData[currentData.length - 1]?.id ? currentData[currentData.length - 1].id + 1 : 1;
    }
    else{
        newProduct.id = 1;
    }

    // Add the new product to the current data
    currentData.push(newProduct);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));

    return new NextResponse(JSON.stringify(newProduct));
}