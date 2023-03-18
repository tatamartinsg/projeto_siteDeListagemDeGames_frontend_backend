import query from '../model/queries.js'
import GameInterface from '../services/interfaces/game.interface.js'

class GamesRepositories{
    public getGames():Promise< GameInterface>{
        const sql = 'SELECT * FROM game NATURAL JOIN image;'
        return query(sql)
    }
    public getGamesByCategory(nameCategory):Promise< GameInterface>{
        const sql = `SELECT * FROM game
                    NATURAL JOIN game_has_category
                    NATURAL JOIN category
                    NATURAL JOIN image
                    WHERE nameCategory LIKE '%${nameCategory}%';`
        return query(sql)
    }
    public getGameById(idGame):Promise< GameInterface>{
        const sql = `SELECT * FROM game 
                    NATURAL JOIN image
                    WHERE idGame = ${idGame};`
        return query(sql)
    }
    public getCategoriesGameById(idGame):Promise< GameInterface>{
        const sql = `SELECT nameCategory FROM game 
                    NATURAL JOIN game_has_category
                    NATURAL JOIN category
                    WHERE idGame = ${idGame}  `
        return query(sql)
    }
    public getPlatformGameById(idGame):Promise< GameInterface>{
        const sql = `SELECT namePlatform, urlGame FROM game 
                    NATURAL JOIN game_has_platform
                    NATURAL JOIN platform
                    WHERE idGame = ${idGame}  `
        return query(sql)
    }
    public getClassificationGameById(idGame):Promise< GameInterface>{
        const sql = `SELECT classification, imageClassification FROM game
                    NATURAL JOIN classification
                    WHERE idGame = ${idGame};`
        return query(sql)
    }
    public getClassificationDescriptionGameById(idGame):Promise< GameInterface>{
        const sql = `SELECT description FROM game
                    NATURAL JOIN classification_has_description
                    NATURAL JOIN description
                    WHERE idGame = ${idGame};`
        return query(sql)
    }
    public getListaDeGamesByIdUserEncrypted(idUserEncrypted):Promise<GameInterface>{
        const sql = ` SELECT name, releaseDate, listingCode, imageBg, imageCard, idGame FROM game
                    NATURAL JOIN user_has_game
                    NATURAL JOIN image
                    WHERE idUser = ${idUserEncrypted};`
        return query(sql)
    }
    public addUserListingCode(idGame, idUser, listingCode):Promise<GameInterface>{
        const sql = `INSERT INTO user_has_game
                     VALUES(${idGame},${idUser},${listingCode})`
        return query(sql)
    }
    public verifyUserListingCode(idGame, idUser, listingCode):Promise<GameInterface>{
        const sql = `SELECT * FROM user_has_game
                     WHERE idGame = ${idGame}
                     and idUser = ${idUser}
                     and listingCode = ${listingCode};`
        return query(sql)
    }
    public deleteGameById(idGame, idUser, listingCode):Promise<GameInterface>{
        const sql = `DELETE FROM user_has_game 
                     WHERE idGame = ${idGame} 
                     and idUser = ${idUser} 
                     and listingCode = ${listingCode};`
        return query(sql)
    }
    
}

export default new GamesRepositories()