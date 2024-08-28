import { IRcvFetchData } from "src/API/Storage/fetchData/types/message/RcvFetchData";
import { messageApp } from "src/API/utils/messageApp/messageApp";
import { ExtensionSendMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionSendMessage";
import { MessageType } from "src/ipc/types/message/messageType";

export const fetchData = async <T extends object>(jobID: string): Promise<T> => {
    const initMessage: IRcvFetchData = {
        type: MessageType.RcvFetchData,
        payload: {
            jobID,
        },
    };
    const handleMessage = (
        message: ExtensionSendMessage,
        resolve: (data: string) => void,
        reject: (reason?: Error) => void
    ) => {
        if(message.type === MessageType.SendFetchData){
            if(message.payload.error){
                reject(new Error(message.payload.error));
                return;
            }
            resolve(message.payload.data);
            return;
        }
        reject(new Error('Unexpected message type'));

    }   
    const result = await messageApp(handleMessage,initMessage);
    return JSON.parse(result);
}