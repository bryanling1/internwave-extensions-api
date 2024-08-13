import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendShowModalMessagePayload{}

export interface ISendShowModalMessageMessage extends IMessage<ISendShowModalMessagePayload>{
    type: MessageType.SendShowModal
}