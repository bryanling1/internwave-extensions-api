export interface IModalInput {
    id: string,
    label: string,
    value?: string | number | [number | undefined, number | undefined]
    type: "string" | "number" | "date" | "textEditor" ,
    span?: number,
    hidden?: boolean,
    required?: boolean
}

export interface IModalStringInput extends IModalInput {
    type: "string",
    value?: string
}

export interface IModalNumberInput extends IModalInput {
    type: "number",
    value?: number
}

export interface ITextEditor extends IModalInput {
    type: "textEditor",
    value?: string
}

export interface IModalDateInput extends IModalInput {
    type: "date",
    value?: number
}

export type ModalInput = 
    IModalDateInput |
    IModalStringInput | 
    IModalNumberInput |
    ITextEditor
