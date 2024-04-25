export type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown

export type Language = {
    name: string
    nativeName: string
    code: string
    dir: 'ltr' | 'rtl'
}
