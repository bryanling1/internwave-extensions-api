import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvModalTableRowClickMessage } from "src/API/JobTable/modal/ModalTableRowClick/ipc/types/RcvModalTableRowClickMessage";
import { ISendModalTableRowClickMessage } from "src/API/JobTable/modal/ModalTableRowClick/ipc/types/SendModalTableRowClickMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleSendModalTableRowClickMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendModalTableRowClickMessage
) => {
    if(!APIs.JobTableAPI?.modal?.onTableRowClick){
        const msg: IRcvModalTableRowClickMessage = {
            type: MessageType.RcvModalTableRowClick,
            payload: undefined
        }
        process.send?.(msg)
        return;
    }
    const {
       row,
       jobID
    } = message.payload
    await APIs.JobTableAPI.modal.onTableRowClick(row, jobID)
    const msg: IRcvModalTableRowClickMessage = {
        type: MessageType.RcvModalTableRowClick,
        payload: undefined
    }
    process.send?.(msg)
}