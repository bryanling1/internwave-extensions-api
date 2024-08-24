import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement"

export interface IModalMarkdownProps {
    text: "string"
}

export interface IModalMarkdown extends IModalElement<IModalMarkdownProps>{
    type: ModalElement.Markdown
}