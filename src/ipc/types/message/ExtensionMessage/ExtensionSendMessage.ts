import { ISendCellButtonClickMessage } from "src/API/JobTable/tableCell/ButtonClick/ipc/types/SendButtonClickMessage";
import { ISendFetchData } from "src/API/Storage/fetchData/types/message/SendFetchData";
import { ISendStoreDataResult } from "src/API/Storage/storeData/types/message/SendStoreDataResult";
import { ISendRenderTableCellMessage } from "src/API/JobTable/tableCell/RenderTableCell/ipc/types/SendRenderTableCellMessage";
import { ISendShowModalMessageMessage } from "src/API/JobTable/modal/ShowModal/types/SendShowModalMessage";
import { ISendModalFormDataMessage } from "src/API/JobTable/modal/ModalFormData/ipc/types/SendModalFormDataMessage";
import { ISendModalTableRowClickMessage } from "src/API/JobTable/modal/ModalTableRowClick/ipc/types/SendModalTableRowClickMessage";
import { ISendModalTableReorderClickMessage } from "src/API/JobTable/modal/ModalTableReorderClick/ipc/types/SendModalTableReorderClickMessage";
import { ISendModalButtonClickMessage } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/SendModalButtonClickMessage";

export type ExtensionSendMessage = 
    ISendRenderTableCellMessage | 
    ISendStoreDataResult | 
    ISendFetchData | 
    ISendCellButtonClickMessage | 
    ISendShowModalMessageMessage | 
    ISendModalFormDataMessage |
    ISendModalTableRowClickMessage | 
    ISendModalTableReorderClickMessage | 
    ISendModalButtonClickMessage
