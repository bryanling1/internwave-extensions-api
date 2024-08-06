import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvFetchDataPayload{
    jobID: string,
}

export interface IRcvFetchData extends IMessage<IRcvFetchDataPayload>{
    type: MessageType.RcvFetchData
}