import { IModalElement, ModalElement } from "src/API/JobTable/modal/ShowModal/types/Modal/ModalElement/ModalElement";
import { ITypography } from "src/API/types/Typography/Typography";

export interface IModalTextProps {
    typography: ITypography
}

export interface IModalText extends IModalElement<IModalTextProps>{
    type: ModalElement.Text
}