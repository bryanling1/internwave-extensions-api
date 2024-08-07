import { ITableCellElement } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellElement/TableCellElement";

export enum TableCellElementType{
    IconButton = "ICON_BUTTON",
}

export interface ITableCell {
    elements: ITableCellElement[]
}
