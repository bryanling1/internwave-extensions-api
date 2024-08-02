import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { MessageType } from "src/ipc/types/message/messageType";
import { IJobTableAPI } from "src/API/JobTable/JobTableAPI";
import { sendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/src/sendRenderTableCellMessage/sendRenderTableCellMessage";

export const initExtensionAPI = (
    APIs: {
        JobTableAPI?: IJobTableAPI
    }
) => {
    process.on('message', async (message: ISendRenderTableCellMessage) => {
        switch (message.type) {
            case MessageType.SendRenderTableCell:
                if(!APIs.JobTableAPI?.onRenderTableCells) return;
                const result = await APIs.JobTableAPI.onRenderTableCells(message.payload.jobsData.map(jobData => ({
                    id: jobData.id,
                    extensionData: jobData.extensionData ? JSON.parse(jobData.extensionData) : {}
                })));
                sendRenderTableCellMessage(result)
                break;
        }
    })
}