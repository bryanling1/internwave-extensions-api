import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";
import { messageApp } from "src/API/utils/messageApp/messageApp";
import { MessageType } from "src/ipc/types/message/messageType";

export const storeData = async <T extends object>(
    jobID: string,
    value: T
): Promise<void> => {
    const initMsg: IRcvStoreData = {
        type: MessageType.RcvStoreData,
        payload: {
            jobID,
            value: JSON.stringify(value)
        }
    }
    return messageApp(
        (message, resolve, reject) => {
            if(message.type === MessageType.SendStoreDataResult){
                if(message.payload.succeeded){
                    resolve();
                } else {
                    reject(new Error(message.payload.message));
                }
            }else{
                reject(new Error('Unexpected message type'));
            }
        },
        initMsg
    )
}
