import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendRenderTableCellMessagePayload{
    jobsData: {
        id: string,
        extensionData: string
    }[]
}

export interface ISendRenderTableCellMessage extends IMessage<ISendRenderTableCellMessagePayload>{
    type: MessageType.SendRenderTableCell
}