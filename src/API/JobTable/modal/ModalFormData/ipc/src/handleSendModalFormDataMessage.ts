import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvModalFormDataMessage } from "src/API/JobTable/modal/ModalFormData/ipc/types/RcvModalFormDataMessage";
import { ISendModalFormDataMessage } from "src/API/JobTable/modal/ModalFormData/ipc/types/SendModalFormDataMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleSendModalFormDataMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendModalFormDataMessage
) => {
    if(!APIs.JobTableAPI?.modal?.onSubmitForm){
        const msg: IRcvModalFormDataMessage = {
            type: MessageType.RcvModalFormData,
            payload: undefined
        }
        process.send?.(msg)
        return;
    }
    const {
       data,
       jobID,
       type
    } = message.payload
    await APIs.JobTableAPI.modal.onSubmitForm(type, jobID, data)
    const msg: IRcvModalFormDataMessage = {
        type: MessageType.RcvModalFormData,
        payload: undefined
    }
    process.send?.(msg)
}