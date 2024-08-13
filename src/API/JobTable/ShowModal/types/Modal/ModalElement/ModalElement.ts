export enum ModalElement{
    Button = "BUTTON",
    JobTitle = "JOB_TITLE",
    Text = "TEXT",
    Markdown = "MARKDOWN",
    Form = "FORM",
    Table = "TABLE"
}

export interface IModalElement<T> {
    type: ModalElement,
    props: T
}