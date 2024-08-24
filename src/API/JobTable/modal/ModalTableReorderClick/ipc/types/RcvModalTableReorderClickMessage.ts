import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvModalTableReorderClickMessage extends IMessage<undefined>{
    type: MessageType.RcvModalTableReorderClick
}