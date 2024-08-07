import { ITableCellText } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellText/TableCellText";

export interface ITableCellButtonTooltip {
    title: ITableCellText,
    subtitles?: ITableCellText[]
}