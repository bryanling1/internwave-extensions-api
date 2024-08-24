import { IModalInput } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalInput/ModalInputs"
import { TableColumnSort } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableHead"
import { IModalTableRowCell } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableRow"
import { ITableCell } from "src/API/JobTable/tableCell/RenderTableCell/types/TableCell/TableCell"

export interface IJobTableAPI<T extends object> {
    tableCell: {
        onRenderTableCells?: (
            jobsData: {
                id: string,
                extensionData: Partial<T>
            }[]
        ) => Promise<ITableCell[]>
        onCellButtonClick?: (
            buttonID: string,
            jobData: {
                id: string,
                extensionData: Partial<T>
            }
        ) => Promise<void>
    },
    modal?: {
        onSubmitForm?: (
            type: string,
            jobID: string,
            data: IModalInput[]
        ) => Promise<void>,
        onTableRowClick?: (
            row: IModalTableRowCell[],
            jobID: string,
        ) => Promise<void>,
        onTableColumnReorder?: (
            label: string,
            sort:TableColumnSort,
            jobID: string,
        ) => Promise<void>,
        onModalButtonClick?: (
            buttonID: string,
            jobID: string,
            data?: unknown
        ) => Promise<void>
    }
   
}
