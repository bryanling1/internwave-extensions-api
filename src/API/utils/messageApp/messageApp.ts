import { ExtensionRcvMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionRcvMessage";
import { ExtensionSendMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionSendMessage";

export const messageApp = async <T>(
    handleResponse: (
        message: ExtensionSendMessage,
        resolve: (data:T) => void,
        reject: (reason?: Error) => void
    ) => void,
    initMessage: ExtensionRcvMessage
) => {
    return new Promise<T>((resolve, reject) => {
        if(!process.send){
            reject(new Error('No IPC channel available'));
            return;
        }

        const messageHandler = (message: ExtensionSendMessage) => {
            process.off('message', messageHandler);
            handleResponse(message, resolve, reject);
        };

        process.on('message', messageHandler);
        process.send(initMessage)
    })
}