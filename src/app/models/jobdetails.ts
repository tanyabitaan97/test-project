export class JobDetails {
    id!: number;
    companyName?:String;
    title?: String;
    companyLogo?: String;
    reference?:String;
    location?:String;
    industries?:String[]=[];
    types?:String[]=[];
    description?:string;
    publishDate?:string;
}