export interface IModalTableHead {
    cells: IModalTableHeadCell[]
}

export type TableColumnSort = "inactive" | "asc" | "desc"
export interface IModalTableHeadCell {
    label: string
    sort?: TableColumnSort,
    sortOnClick?: boolean,
    align?: "left" | "center" | "right",
    hidden?: boolean
}