import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement"
import { IModalTableHead } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableHead"
import { IModalTableRow } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/types/ModalTableRow"

export interface IModalTableProps {
    head: IModalTableHead
    rows: IModalTableRow[]
}

export interface IModalTable extends IModalElement<IModalTableProps>{
    type: ModalElement.Table
}