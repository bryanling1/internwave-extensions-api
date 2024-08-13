export interface IModalInput {
    id: string,
    label: string,
    value: string | number,
    type: "string" | "date" | "markdown" | "number",
    flex?: number,
    hidden?: boolean
}