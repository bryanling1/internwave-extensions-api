import { ITypography } from "src/API/types/Typography/Typography"

export interface IModalTableRow {
    cells: (IModalTableRowCell | undefined)[]
}

export interface IModalTableRowCell {
    text: ITypography[]
}