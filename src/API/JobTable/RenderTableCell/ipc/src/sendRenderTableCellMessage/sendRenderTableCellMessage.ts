import { IRcvRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { ITableCell } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell";
import { MessageType } from "src/ipc/types/message/messageType";

export const sendRenderTableCellMessage = (cells: ITableCell[]) => {
    const msg: IRcvRenderTableCellMessage = {
        type: MessageType.RcvRenderTableCell,
        payload: {
            tableCells: cells
        }
    }
    process.send?.(msg)
}