import { IMessage } from "src/ipc/types/message/message"
import { MessageType } from "src/ipc/types/message/messageType"

export interface ISendStoreDataResultPayload{
    succeeded: boolean,
    message?: string
}

export interface ISendStoreDataResult extends IMessage<ISendStoreDataResultPayload>{
    type: MessageType.SendStoreDataResult
}