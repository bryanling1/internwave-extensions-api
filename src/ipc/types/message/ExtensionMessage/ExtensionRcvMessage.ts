import { IRcvRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { IRcvFetchData } from "src/API/Storage/fetchData/types/message/RcvFetchData";
import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";

export type ExtensionRcvMessage = 
    IRcvRenderTableCellMessage | 
    IRcvStoreData | 
    IRcvFetchData