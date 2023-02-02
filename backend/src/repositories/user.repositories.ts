import query from '../model/queries.js'
import UserInterface from '../services/interfaces/user.interface.js'

class UserRepositories{

    verifyUsername(username:string):Promise<object | any>{
        const sql = `SELECT * FROM user
                    WHERE username = '${username}';`
        return query(sql)
    }

    verifyEmail(email:string):Promise<string | any>{
        const sql = `SELECT * FROM user
                    WHERE email = '${email}';`
        return query(sql)
    }

    // getUserById(id: number):Promise<string | any>{
    //     const sql = `SELECT * FROM user
    //                 WHERE idUser = ${id};`
    //     return query(sql)
    // }


    signUpUser(user: UserInterface): Promise<object | any>{
        const sql = `INSERT INTO user SET ?; `
        return query(sql, user)
    }

    signInUser(user: UserInterface ):Promise<string | any>{
        const sql = ` `
        return query(sql, user)
    }
}

export default new UserRepositories()