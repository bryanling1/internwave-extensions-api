import { IModalInput } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalInput/ModalInputs";
import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface ISendModalFormDataMessagePayload{
    data: IModalInput[],
    jobID: string,
    type: string
}

export interface ISendModalFormDataMessage extends IMessage<ISendModalFormDataMessagePayload>{
    type: MessageType.SendModalFormData
}