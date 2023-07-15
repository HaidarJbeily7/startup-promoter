


export abstract class AbstractAPI{
    BASE_URL: string;
    constructor(){
        this.BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
    }
}