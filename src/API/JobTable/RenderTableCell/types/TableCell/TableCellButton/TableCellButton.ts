import { TableCellElementType } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell"
import { ITableCellButtonIcon, TableCellButtonIcon } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellButtonIcon/TableCellButtonIcon"
import { ITableCellButtonTooltip } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellButtonTooltip/TableCellButtonTooltip"



export interface ITableCellButton {
    type: TableCellElementType.Button
    id: string
    icon: ITableCellButtonIcon
    tooltip: ITableCellButtonTooltip
}