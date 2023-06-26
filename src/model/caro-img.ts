export interface CaroImg {
    id:number,
    imgUrl:string,
}

export interface NotesViewer{
    id:string;
    detailed_description:DetailedDescription;
    conclusion:string
}
interface DetailedDescription{
    date:string;
    heading:string;
    about:string
    content_1:Content_1;
    content_2:Content_2;

}
interface Content_1{
    headings:string;
    p1:string;
    p2:string;
    p3:string;
    p4:string;
    p5:string;
    p6:string;
}

interface Content_2{
    headings:string;
    p1:string;
    p2:string;
    p3:string;
    p4:string;
    p5:string;
}