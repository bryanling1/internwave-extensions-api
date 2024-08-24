import { IAPIs } from "src/API/ExtensionAPI";
import { IRcvCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/types/RcvButtonClickMessage";
import { ISendCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/types/SendButtonClickMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const handleCellButtonClickMessage = async <T extends object>(
    APIs: IAPIs<T>,
    message: ISendCellButtonClickMessage
) => {
    if(!APIs.JobTableAPI?.tableCell.onCellButtonClick){
        const msg: IRcvCellButtonClickMessage = {
            type: MessageType.RcvCellButtonClick,
            payload: undefined
        }
        process.send?.(msg)
        return;
    }
    const {
       buttonID,
       jobData
    } = message.payload
    await APIs.JobTableAPI.tableCell.onCellButtonClick(buttonID, {
        id: jobData.id,
        extensionData: jobData.extensionData ? JSON.parse(jobData.extensionData) : {}
    })
    const msg: IRcvCellButtonClickMessage = {
        type: MessageType.RcvCellButtonClick,
        payload: undefined
    }
    process.send?.(msg)
}