import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement";

export interface IModalMarkdownViewerProps {
    value: "string"
}

export interface IModalMarkdownViewer extends IModalElement<IModalMarkdownViewerProps>{
    type: ModalElement.MarkdownViewer
}