import { IModal } from "src/API/JobTable/modal/ShowModal/types/Modal/Modal";
import { IMessage } from "src/ipc/types/message/message";
import { MessageType } from "src/ipc/types/message/messageType";

export interface IRcvShowModalMessagePayload{
    modal: IModal,
}

export interface IRcvShowModalMessageMessage extends IMessage<IRcvShowModalMessagePayload>{
    type: MessageType.RcvShowModal
}