import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvModalTableRowClickMessage extends IMessage<undefined>{
    type: MessageType.RcvModalTableRowClick
}