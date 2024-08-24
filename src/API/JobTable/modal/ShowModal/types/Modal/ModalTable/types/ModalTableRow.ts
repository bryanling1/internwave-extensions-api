import { Icons } from "src/API/types/Icons/Icons"
import { ITypography } from "src/API/types/Typography/Typography"

export interface IModalTableRow {
    cells: IModalTableRowCell[]
}

export interface IModalTableRowCell {
    typography: ITypography
    align?: "left" | "center" | "right",
    width?: string,
    endIcon?: Icons
}

