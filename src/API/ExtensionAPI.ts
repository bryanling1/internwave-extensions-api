import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { MessageType } from "src/ipc/types/message/messageType";
import { IJobTableAPI } from "src/API/JobTable/JobTableAPI";
import { handleRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/src/handleRenderTableCellMessage/handleRenderTableCellMessage";

export interface IAPIs {
    JobTableAPI?: IJobTableAPI
}
export const initExtensionAPI = (
    APIs: IAPIs
) => {
    process.on('message', async (message: ISendRenderTableCellMessage) => {
        switch (message.type) {
            case MessageType.SendRenderTableCell:
                await handleRenderTableCellMessage(APIs, message);
                break;
        }
    })
}