import { ITableCell } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell"

export interface IJobTableAPI<T extends object> {
    onRenderTableCells?: (
        jobsData: {
            id: string,
            extensionData: Partial<T>
        }[]
    ) => Promise<ITableCell[]>
    onButtonClick?: (
        buttonID: string,
        jobData: {
            id: string,
            extensionData: Partial<T>
        }
    ) => Promise<void>
}
