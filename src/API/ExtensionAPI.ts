import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { MessageType } from "src/ipc/types/message/messageType";
import { IJobTableAPI } from "src/API/JobTable/JobTableAPI";
import { handleRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/src/handleRenderTableCellMessage/handleRenderTableCellMessage";
import { handleCellButtonClickMessage } from "src/API/JobTable/ButtonClick/ipc/src/handleCellButtonClickMessage";
import { ExtensionSendMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionSendMessage";

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
        }
    })
}