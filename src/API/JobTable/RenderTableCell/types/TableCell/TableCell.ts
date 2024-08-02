import { ITableCellElement } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellElement/TableCellElement";

export enum TableCellElementType{
    Button = "BUTTON",
}

export interface ITableCell {
    elements: ITableCellElement[]
}
