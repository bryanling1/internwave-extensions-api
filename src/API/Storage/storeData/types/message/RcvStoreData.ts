import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvStoreDataPayload{
    jobID: string,
    value: string
}

export interface IRcvStoreData extends IMessage<IRcvStoreDataPayload>{
    type: MessageType.RcvStoreData
}