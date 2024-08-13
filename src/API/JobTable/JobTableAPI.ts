import { IModal } from "src/API/JobTable/ShowModal/types/Modal/Modal"
import { ITableCell } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell"

export interface IJobTableAPI<T extends object> {
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
}
