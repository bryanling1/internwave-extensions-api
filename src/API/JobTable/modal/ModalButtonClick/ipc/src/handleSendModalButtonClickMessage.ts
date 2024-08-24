import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvModalButtonClickMessage } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/RcvModalButtonClickMessage";
import { ISendModalButtonClickMessage } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/SendModalButtonClickMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleSendModalButtonClickMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendModalButtonClickMessage
) => {
    const msg: IRcvModalButtonClickMessage = {
        type: MessageType.RcvModalButtonClick,
        payload: undefined
    }
    if(!APIs.JobTableAPI?.modal?.onModalButtonClick){
        
        process.send?.(msg)
        return;
    }
    const {
         buttonID,
         jobID,
         data
    } = message.payload
    await APIs.JobTableAPI.modal.onModalButtonClick(buttonID, jobID,  data)
    process.send?.(msg)
}