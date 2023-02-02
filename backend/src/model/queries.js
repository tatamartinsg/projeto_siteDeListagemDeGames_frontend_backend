import connection from './conecction.js'

const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        return connection.query(query, params, (erros,results,campos) =>{
            if(erros){
                reject(erros)
            }
            else{
                resolve(results)
            }
        })
    })
}

export default executeQuery
