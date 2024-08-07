import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { MessageType } from "src/ipc/types/message/messageType";
import { IJobTableAPI } from "src/API/JobTable/JobTableAPI";
import { handleRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/src/handleRenderTableCellMessage/handleRenderTableCellMessage";

export interface IAPIs<T extends object> {
    JobTableAPI?: IJobTableAPI<Partial<T>>
}
export const initExtensionAPI = <T extends object>(
    APIs: IAPIs<T>
) => {
    process.on('message', async (message: ISendRenderTableCellMessage) => {
        switch (message.type) {
            case MessageType.SendRenderTableCell:
                await handleRenderTableCellMessage(APIs, message);
                break;
        }
    })
}