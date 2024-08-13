import { ISendCellButtonClickMessage } from "src/API/JobTable/ButtonClick/ipc/types/SendButtonClickMessage";
import { ISendRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { ISendShowModalMessageMessage } from "src/API/JobTable/ShowModal/types/SendShowModalMessage";
import { ISendFetchData } from "src/API/Storage/fetchData/types/message/SendFetchData";
import { ISendStoreDataResult } from "src/API/Storage/storeData/types/message/SendStoreDataResult";

export type ExtensionSendMessage = 
    ISendRenderTableCellMessage | 
    ISendStoreDataResult | 
    ISendFetchData | 
    ISendCellButtonClickMessage | 
    ISendShowModalMessageMessage