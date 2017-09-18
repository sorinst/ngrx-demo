export class ComboItem {

    public itemId: number;
    public text: string;
    public parentItemId: number;

    constructor(itemId=0, text="", parentItemId=null){
        this.itemId = itemId;
        this.text = text;
        this.parentItemId = parentItemId;
    }
}