export enum ModalElement{
    Button = "BUTTON",
    JobTitle = "JOB_TITLE",
    Text = "TEXT",
    Markdown = "MARKDOWN",
    Form = "FORM",
    Table = "TABLE",
    MarkdownViewer = "MARKDOWN_VIEWER",
}

export interface IModalElement<T> {
    type: ModalElement,
    props: T
}