import { IRcvRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";
import { ISendStoreDataResult } from "src/API/Storage/storeData/types/message/SendStoreDataResult";

export type ExtensionRcvMessage = IRcvRenderTableCellMessage | IRcvStoreData
export type ExtensionSendMessage = ISendRenderTableCellMessage | ISendStoreDataResult