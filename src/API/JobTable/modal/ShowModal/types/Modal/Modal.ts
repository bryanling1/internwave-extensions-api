import { IModalButton } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalButton/ModalButton"
import { IModalForm } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalForm/ModalForm"
import { IModalHeaderButton } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalHeaderButton/ModalHeaderButton"
import { IModalJobTitle } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalJobTitle/ModalJobTitle"
import { IModalMarkdown } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalMarkdown/ModalMarkdown"
import { IModalMarkdownViewer } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalMarkdownViewer/ModalMarkdownViewer"
import { IModalTable } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalTable/ModalTable"
import { IModalText } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalText/ModalText"


export type ModalElements = (
    IModalButton | 
    IModalJobTitle |
    IModalText | 
    IModalMarkdown | 
    IModalForm | 
    IModalTable | 
    IModalMarkdownViewer
)[]
export interface IModal {
    elements: ModalElements,
    type: string,
    size?: "xs" | "sm" | "md" | "lg"
    canToggleFullView?: boolean
    headerButtons?: IModalHeaderButton[]
}