import { IModalElement, ModalElement } from "src/API/JobTable/ShowModal/types/Modal/ModalElement/ModalElement";
import { ITypography } from "src/API/types/Typography/Typography";

export interface IModalMarkdownProps {
    text: "string"
}

export interface IModalMarkdown extends IModalElement<IModalMarkdownProps>{
    type: ModalElement.Markdown
}