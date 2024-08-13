import { IModalButton } from "src/API/JobTable/ShowModal/types/Modal/ModalButton/ModalButton";
import { IModalForm } from "src/API/JobTable/ShowModal/types/Modal/ModalForm/ModalForm";
import { IModalJobTitle } from "src/API/JobTable/ShowModal/types/Modal/ModalJobTitle/ModalJobTitle";
import { IModalMarkdown } from "src/API/JobTable/ShowModal/types/Modal/ModalMarkdown/ModalMarkdown";
import { IModalText } from "src/API/JobTable/ShowModal/types/Modal/ModalText/ModalText";

type ModalElements = (
    IModalButton | 
    IModalJobTitle |
    IModalText | 
    IModalMarkdown | 
    IModalForm
)[]
export interface IModal {
    elements: ModalElements
}