import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvModalButtonClickMessage extends IMessage<undefined>{
    type: MessageType.RcvModalButtonClick
}