import { ISendModalButtonClickMessagePayload } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/SendModalButtonClickMessage";
import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement";
import { Icons } from "src/API/types/Icons/Icons";

export interface IModalButtonProps {
    icon?: Icons,
    label: string,
    align?: "left" | "center" | "right",
    variant?: "text" | "primary",
    onClick: ISendModalButtonClickMessagePayload,
    color?: string
}

export interface IModalButton extends IModalElement<IModalButtonProps>{
    type: ModalElement.Button
}