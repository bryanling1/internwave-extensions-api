import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendModalButtonClickMessagePayload{
    buttonID: string,
    jobID: string,
    data?: unknown
}

export interface ISendModalButtonClickMessage extends IMessage<ISendModalButtonClickMessagePayload>{
    type: MessageType.SendModalButtonClick
}