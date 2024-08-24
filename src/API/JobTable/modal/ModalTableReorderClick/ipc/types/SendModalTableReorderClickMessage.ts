import { TableColumnSort } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableHead";
import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendModalTableReorderClickPayload{
    label: string,
    sort: TableColumnSort,
    jobID: string
}

export interface ISendModalTableReorderClickMessage extends IMessage<ISendModalTableReorderClickPayload>{
    type: MessageType.SendModalTableReorderClick
} 