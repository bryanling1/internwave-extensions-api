import { IRcvCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/types/RcvButtonClickMessage";
import { IRcvFetchData } from "src/API/Storage/fetchData/types/message/RcvFetchData";
import { IRcvStoreData } from "src/API/Storage/storeData/types/message/RcvStoreData";
import { IRcvRenderTableCellMessage } from "src/API/JobTable/tableCell/RenderTableCell/ipc/types/RcvRenderTableCellMessage";
import { IRcvShowModalMessageMessage } from "src/API/JobTable/modal/ShowModal/types/RcvShowModalMessage";
import { IRcvModalFormDataMessage } from "src/API/JobTable/modal/ModalFormData/ipc/types/RcvModalFormDataMessage";
import { IRcvModalTableRowClickMessage } from "src/API/JobTable/modal/ModalTableRowClick/ipc/types/RcvModalTableRowClickMessage";
import { IRcvModalTableReorderClickMessage } from "src/API/JobTable/modal/ModalTableReorderClick/ipc/types/RcvModalTableReorderClickMessage";
import { IRcvModalButtonClickMessage } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/RcvModalButtonClickMessage";

export type ExtensionRcvMessage = 
    IRcvRenderTableCellMessage | 
    IRcvStoreData | 
    IRcvFetchData | 
    IRcvCellButtonClickMessage | 
    IRcvShowModalMessageMessage |
    IRcvModalFormDataMessage | 
    IRcvModalTableRowClickMessage | 
    IRcvModalTableReorderClickMessage | 
    IRcvModalButtonClickMessage