import { Cards } from "src/model/caro-img";
import { ActivatedRoute } from "@angular/router";
export class ResolvedCardsList{
    constructor(public cardList:Cards[] | any, public error:any=null){}
}