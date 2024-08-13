import { ExtensionSendMessage } from "src/ipc/types/message/ExtensionMessage/ExtensionSendMessage"

export interface IModalTableHead {
    cells: (IModalTableHeadCell | undefined)[]
}

export interface IModalTableHeadCell {
    label: string
    sort?: "inactive" | "asc" | "desc",
    onClick?: ExtensionSendMessage,
    flex?: number
}