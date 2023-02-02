interface GameInterface{

    idGame: number | string,
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
    idImage: number | string,
    imageBg?: string,
    imageCard?: string,
    length: number

}

export default GameInterface