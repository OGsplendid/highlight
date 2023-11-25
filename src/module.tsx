export type TItem = {
    type: string,
    url?: string,
    title?: string,
    views: number,
}

export interface IItems {
    list: TItem[],
}