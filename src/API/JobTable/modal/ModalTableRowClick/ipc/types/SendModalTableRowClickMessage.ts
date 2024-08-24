import { IModalTableRowCell } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableRow";
import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendModalTableRowClickMessagePayload{
    row: IModalTableRowCell[]
    jobID: string
}

export interface ISendModalTableRowClickMessage extends IMessage<ISendModalTableRowClickMessagePayload>{
    type: MessageType.SendModalTableRowClick
}