import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvModalFormDataMessage extends IMessage<undefined>{
    type: MessageType.RcvModalFormData
}