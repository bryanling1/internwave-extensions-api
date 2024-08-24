import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendCellButtonClickMessagePayload{
    buttonID: string
    jobData: {
        id: string,
        extensionData: string
    }
}

export interface ISendCellButtonClickMessage extends IMessage<ISendCellButtonClickMessagePayload>{
    type: MessageType.SendCellButtonClick
}