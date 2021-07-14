export interface MainPageModel {
    firstParagraph: {
        text: string,
        image: string
    },
    paragraphs: Paragraph[]
}

export interface Paragraph {
    title: string,
    text: string,
    image: string
}