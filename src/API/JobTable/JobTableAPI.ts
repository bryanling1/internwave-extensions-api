import { ISendRenderTableCellMessagePayload } from "src/API/JobTable/RenderTableCell/ipc/types/SendRenderTableCellMessage"
import { ITableCell } from "src/API/JobTable/RenderTableCell/types/TableCell/TableCell"

export interface IJobTableAPI {
    onRenderTableCells?: (
        jobsData: {
            id: string,
            extensionData: unknown
        }[]
    ) => Promise<ITableCell[]>
}
