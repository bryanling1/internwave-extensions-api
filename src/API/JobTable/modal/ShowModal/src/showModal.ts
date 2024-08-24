import { IModal } from "src/API/JobTable/modal/ShowModal/types/Modal/Modal";
import { IRcvShowModalMessageMessage } from "src/API/JobTable/modal/ShowModal/types/RcvShowModalMessage";
import { messageApp } from "src/API/utils/messageApp/messageApp";
import { MessageType } from "src/ipc/types/message/messageType";

export const showModal = async (modal: IModal): Promise<void>=> {
    const initMsg: IRcvShowModalMessageMessage = {
        type: MessageType.RcvShowModal,
        payload: {
            modal,
        }
    }
    return messageApp(
        (message, resolve, reject) => {
            if(message.type === MessageType.SendShowModal){
                resolve();
            }else{
                reject(new Error('Unexpected message type'));
            }
        },
        initMsg
    )
}