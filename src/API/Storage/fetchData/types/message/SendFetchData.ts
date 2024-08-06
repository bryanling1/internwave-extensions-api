import { IMessage } from "src/ipc/types/message/message"
import { MessageType } from "src/ipc/types/message/messageType"

export interface ISendFetchDataPayload{
    data: string,
    error?: string
}

export interface ISendFetchData extends IMessage<ISendFetchDataPayload>{
    type: MessageType.SendFetchData
}