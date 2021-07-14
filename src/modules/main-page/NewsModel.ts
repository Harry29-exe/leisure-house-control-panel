export interface NewsModel {
    name: string,
    shortDescription: string,
    description: string,
    image: string
}

export interface NewsPageModel {
    socialMediaDescription: string,
    news: NewsModel[]
}