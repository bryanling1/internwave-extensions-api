import { IModalElement, ModalElement } from "src/API/JobTable/ShowModal/types/Modal/ModalElement/ModalElement";

export interface IModalJobTitle extends IModalElement<undefined>{
    type: ModalElement.JobTitle
}