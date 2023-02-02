// import userRepositories from "../repositories/user.repositories";
// import jwt from 'jsonwebtoken'
// import UserInterface from "../services/interfaces/user.interface";
// import { NextFunction, Request, Response } from "express";

// class UserAuthMiddleware{
//     private tokenKEY = process.env.JWT_KEY || "JWT_KEY-SECRET-KEY-07022002"

//     public async authorizeUserByToken(req:Request, res:Response, next: NextFunction): Promise<Response | void>{
//         const token = req.query.token || req.headers['x-access-token'] 

//         if(!token){
//             return res.status(401).json({error: true, message: "You need to login first"})
//         }
//         try{

//             const userToken = jwt.verify(token, "JWT_KEY-SECRET-KEY-07022002") as unknown as UserInterface;

//             console.log(userToken)
//             // const user = await userRepositories.getUserById(userToken.idUser)
    
//             // if(!user){
//             //     return res.status(400).json({error: true, message: "User does not exist!"})
//             // }

//             return next()

//         }catch(error){
//             console.log(error)
//             return res.status(401).json({error: true, message: "Token is invalid!"})
//         }

//     }
// }

// export default new UserAuthMiddleware()