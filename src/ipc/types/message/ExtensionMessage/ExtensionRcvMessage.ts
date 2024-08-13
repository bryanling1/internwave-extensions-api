import { IRcvCellButtonClickMessage } from "src/API/JobTable/ButtonClick/ipc/types/RcvButtonClickMessage";
import { IRcvRenderTableCellMessage } from "src/API/JobTable/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { IRcvShowModalMessageMessage } from "src/API/JobTable/ShowModal/types/RcvShowModalMessage";
import { IRcvFetchData } from "src/API/Storage/fetchData/types/message/RcvFetchData";
import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";

export type ExtensionRcvMessage = 
    IRcvRenderTableCellMessage | 
    IRcvStoreData | 
    IRcvFetchData | 
    IRcvCellButtonClickMessage | 
    IRcvShowModalMessageMessage