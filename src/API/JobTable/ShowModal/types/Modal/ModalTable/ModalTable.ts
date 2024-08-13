import { IModalElement, ModalElement } from "src/API/JobTable/ShowModal/types/Modal/ModalElement/ModalElement";
import { IModalTableHead } from "src/API/JobTable/ShowModal/types/Modal/ModalTable/types/ModalTableHead";
import { IModalTableRow } from "src/API/JobTable/ShowModal/types/Modal/ModalTable/types/ModalTableRow";
import { Icons } from "src/API/types/Icons/Icons";

export interface IModalTableProps {
    head: IModalTableHead
    rows: IModalTableRow[]
}

export interface IModalTable extends IModalElement<IModalTableProps>{
    type: ModalElement.Table
}