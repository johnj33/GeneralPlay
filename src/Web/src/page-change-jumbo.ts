import {bindable} from "aurelia-framework";
export class pageChangeJumbo {
    @bindable pageNumber: number = 1;
    
    public changePage(value: number) {
        this.pageNumber += value;
    }
    
    public ChangeToRandomPage(){
        this.pageNumber = Math.floor((Math.random() * 10) + 1);
    }
}