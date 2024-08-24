import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvModalTableReorderClickMessage } from "src/API/JobTable/modal/ModalTableReorderClick/ipc/types/RcvModalTableReorderClickMessage";
import { ISendModalTableReorderClickMessage } from "src/API/JobTable/modal/ModalTableReorderClick/ipc/types/SendModalTableReorderClickMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleSendModalTableReorderClickMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendModalTableReorderClickMessage
) => {
    if(!APIs.JobTableAPI?.modal?.onTableColumnReorder) return;
    const {
       label,
       sort,
       jobID
    } = message.payload
    await APIs.JobTableAPI.modal.onTableColumnReorder(label, sort, jobID)
    const msg: IRcvModalTableReorderClickMessage = {
        type: MessageType.RcvModalTableReorderClick,
        payload: undefined
    }
    process.send?.(msg)
}