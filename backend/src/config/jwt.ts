import jwt from 'jsonwebtoken'

class JWT{
    private tokenKEY = process.env.JWT_KEY

    public generateToken(data){
        const token = jwt.sign({
            username: data.username,
            email: data.email,
            idUser: data.idUser
            },"JWT_KEY-SECRET-KEY-07022002",{
            expiresIn: "2000000"
        })

        return token
    }
}

export default new JWT()