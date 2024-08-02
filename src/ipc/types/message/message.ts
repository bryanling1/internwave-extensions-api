export interface IMessage<T> {
    type: string
    payload: T
}