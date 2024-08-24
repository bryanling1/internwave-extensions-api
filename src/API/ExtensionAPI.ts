import { MessageType } from "src/ipc/types/message/messageType";
import { IJobTableAPI } from "src/API/JobTable/JobTableAPI";
import { handleCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/src/handleCellButtonClickMessage";
import { ExtensionSendMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionSendMessage";
import { handleRenderTableCellMessage } from "src/API/JobTable/tableCell/RenderTableCell/ipc/src/handleRenderTableCellMessage/handleRenderTableCellMessage";
import { handleSendModalFormDataMessage } from "src/API/JobTable/modal/ModalFormData/ipc/src/handleSendModalFormDataMessage";
import { handleSendModalTableRowClickMessage } from "src/API/JobTable/modal/ModalTableRowClick/ipc/src/handleSendModalTableRowClickMessage";
import { handleSendModalTableReorderClickMessage } from "src/API/JobTable/modal/ModalTableReorderClick/ipc/src/handleSendModalTableReorderClickMessage";
import { handleSendModalButtonClickMessage } from "src/API/JobTable/modal/ModalButtonClick/ipc/src/handleSendModalButtonClickMessage";

export interface IAPIs<T extends object> {
    JobTableAPI?: IJobTableAPI<Partial<T>>
}
export const initExtensionAPI = <T extends object>(
    APIs: IAPIs<T>
) => {
    process.on('message', async (message: ExtensionSendMessage) => {
        switch (message.type) {
            case MessageType.SendRenderTableCell:
                await handleRenderTableCellMessage(APIs, message);
                break;
            case MessageType.SendCellButtonClick:
                await handleCellButtonClickMessage(APIs, message);
                break;
            case MessageType.SendModalFormData:
                await handleSendModalFormDataMessage(APIs, message);
                break;
            case MessageType.SendModalTableRowClick:
                await handleSendModalTableRowClickMessage(APIs, message);
                break;
            case MessageType.SendModalTableReorderClick:
                await handleSendModalTableReorderClickMessage(APIs, message);
                break;
            case MessageType.SendModalButtonClick:
                await handleSendModalButtonClickMessage(APIs, message)
                break
        }
    })
}
