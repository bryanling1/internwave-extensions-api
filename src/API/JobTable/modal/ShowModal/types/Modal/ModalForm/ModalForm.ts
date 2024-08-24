import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement"
import { ModalInput } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalInput/ModalInputs"
import { Icons } from "src/API/types/Icons/Icons"


export interface IModalFormProps {
    inputs: ModalInput[]
    submitButton?: {
        label: string,
        icon?: Icons
    }
    columns?: number,
    useDebounce?: boolean
}

export interface IModalForm extends IModalElement<IModalFormProps>{
    type: ModalElement.Form
}