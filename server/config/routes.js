var Users = require('../controllers/users.js')

module.exports = (app)=>{
    
     app.post('/add', Users.add);
     app.post('/create', Users.create);
     app.post('/del', Users.delete);
     app.post('/retrieve', Users.retrieve)
     app.post('/count', Users.count)

     app.get('/get/all', Users.get);
     app.get('/get/user', Users.find)

     app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
        })
}