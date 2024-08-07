export enum TableCellButtonIcon {
    CALENDAR = "CAELDNAR",
    NOTE = "NOTE",
    CIRCLE = "CIRCLE",
    ADD = "ADD"
}

export interface ITableCellButtonIcon {
    type: TableCellButtonIcon,
    color?: string,
    text?: string
}