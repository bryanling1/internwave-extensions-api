import { ITableCell } from "src/API/JobTable/tableCell/RenderTableCell/types/TableCell/TableCell";
import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvRenderTableCellMessagePayload{
    tableCells: ITableCell[]
}

export interface IRcvRenderTableCellMessage extends IMessage<IRcvRenderTableCellMessagePayload>{
    type: MessageType.RcvRenderTableCell
}
