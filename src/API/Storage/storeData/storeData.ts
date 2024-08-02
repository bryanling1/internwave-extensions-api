import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";
import { ISendStoreDataResult } from "src/API/Storage/storeData/types/message/SendStoreDataResult";
import { MessageType } from "src/ipc/types/message/messageType";

export const storeData = async (
    jobID: string,
    key: string,
    value: unknown
): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        if(!process.send){
            reject(new Error('No IPC channel available'));
            return;
        }
        process.on('message', (message: ISendStoreDataResult) => {
            if(message.type === MessageType.SendStoreDataResult){
                if(message.payload.succeeded){
                    resolve();
                } else {
                    reject(new Error(message.payload.message));
                }
            }
        })
        const msg: IRcvStoreData = {
            type: MessageType.RcvStoreData,
            payload: {
                jobID,
                key,
                value
            }
        }
        process.send(msg)
    })
}