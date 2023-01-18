module.exports = app => {
    
    app.get('/',(req,res) => {
        console.log("entrou na rota /")
        res.json('dasdad')
    })

}