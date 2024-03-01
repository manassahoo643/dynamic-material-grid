export interface Column {
    id: string;
    visible?: boolean
    label: string,
    width?: number,
    columnWidths?:number,
    customColor?:string,
    phoneField?:boolean,
    dateField?:boolean,
    currencyField?:boolean,
    sticky?:boolean,
    stickyEnd?:boolean,
    centerAligned?:boolean
}
