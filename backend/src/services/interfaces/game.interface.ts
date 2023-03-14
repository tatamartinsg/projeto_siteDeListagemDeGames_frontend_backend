interface GameInterface{

    idGame: number,
    name: string,
    relaseDate: string,
    synopsis: string,
    video: string,
    classification:{
        classification: string | number,
        imageClassification?: string,
        description?: []
    },
    keyWord: string,
    categories: [],
    platform?: [{
        namePlatform?: string,
        urlGame?: string
    }],
    idImage: number,
    imageBg?: string,
    imageCard?: string,
    length: number,
    listingCode?: number

}

export default GameInterface