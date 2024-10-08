import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvRenderTableCellMessage } from "src/API/JobTable/tableCell/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { ISendRenderTableCellMessage } from "src/API/JobTable/tableCell/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleRenderTableCellMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendRenderTableCellMessage
) => {
    if(!APIs.JobTableAPI?.tableCell.onRenderTableCells){
        const msg: IRcvRenderTableCellMessage = {
            type: MessageType.RcvRenderTableCell,
            payload: {
                tableCells: []
            }
        }
        process.send?.(msg)
        return;
    }
    const cells = await APIs.JobTableAPI.tableCell.onRenderTableCells(message.payload.jobsData.map(jobData => ({
        id: jobData.id,
        extensionData: jobData.extensionData ? JSON.parse(jobData.extensionData) : {}
    })));
    const msg: IRcvRenderTableCellMessage = {
        type: MessageType.RcvRenderTableCell,
        payload: {
            tableCells: cells
        }
    }
    process.send?.(msg)
}