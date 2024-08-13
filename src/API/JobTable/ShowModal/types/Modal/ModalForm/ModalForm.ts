import { IModalButton } from "src/API/JobTable/ShowModal/types/Modal/ModalButton/ModalButton";
import { IModalElement, ModalElement } from "src/API/JobTable/ShowModal/types/Modal/ModalElement/ModalElement";
import { IModalInput } from "src/API/JobTable/ShowModal/types/Modal/ModalInput/ModalInputs";

export interface IModalFormProps {
    inputs: IModalInput[]
    submitButton: {
        label: string,
    }
}

export interface IModalForm extends IModalElement<IModalFormProps>{
    type: ModalElement.Form
}