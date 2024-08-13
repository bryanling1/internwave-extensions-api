import { IModalElement, ModalElement } from "src/API/JobTable/ShowModal/types/Modal/ModalElement/ModalElement";
import { Icons } from "src/API/types/Icons/Icons";

export interface IModalButtonProps {
    icon?: Icons,
    label: string,
    align?: "left" | "center" | "right",
    type?: "text"
}

export interface IModalButton extends IModalElement<IModalButtonProps>{
    type: ModalElement.Button
}