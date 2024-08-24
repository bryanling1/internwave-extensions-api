import { ISendModalButtonClickMessagePayload } from "src/API/JobTable/modal/ModalButtonClick/ipc/types/SendModalButtonClickMessage";
import { Icons } from "src/API/types/Icons/Icons";

export interface IModalHeaderButton {
    icon: Icons,
    label?: string,
    onClick: ISendModalButtonClickMessagePayload
}