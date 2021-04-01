export interface TextType {
    text: string
    weight: number
}

export interface TextInfoType {
    id: string
    style: {
        fontSize: string
        marginLeft: string
        color: string
        lineHeight: string
    }
    data: TextType
}

export interface ParamsType {
    data: TextType[]
    colors: string[]
    maxFontSize: number
}
