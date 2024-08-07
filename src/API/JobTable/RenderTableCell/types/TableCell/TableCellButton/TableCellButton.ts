import { TableCellElementType } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell"
import { ITableCellButtonIcon } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellButtonIcon/TableCellButtonIcon"
import { ITableCellButtonTooltip } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCellButtonTooltip/TableCellButtonTooltip"

export interface ITableCellIconButton {
    id: string
    type: TableCellElementType.IconButton
    icon: ITableCellButtonIcon
    tooltip?: ITableCellButtonTooltip
}