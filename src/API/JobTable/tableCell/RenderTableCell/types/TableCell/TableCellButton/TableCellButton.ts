import { ISendCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/types/SendButtonClickMessage"
import { TableCellElementType } from "src/API/JobTable/tableCell/RenderTableCell/types/TableCell/TableCell"
import { ITableCellButtonIcon } from "src/API/JobTable/tableCell/RenderTableCell/types/TableCell/TableCellButtonIcon/TableCellButtonIcon"
import { ITableCellButtonTooltip } from "src/API/JobTable/tableCell/RenderTableCell/types/TableCell/TableCellButtonTooltip/TableCellButtonTooltip"

export interface ITableCellIconButton {
    id: string
    type: TableCellElementType.IconButton
    icon: ITableCellButtonIcon
    tooltip?: ITableCellButtonTooltip,
}