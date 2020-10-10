let db = require('../db/models')

module.exports = {
    all: (req,res)=>{
        db.Peliculas.findAll()
        .then(peliculas =>{
            res.send(peliculas)
        })
        .catch(e=>{
            res.send(e)
        })
    },
    detail:(req,res)=>{
        db.Peliculas.findByPk({
            where:{
                id: req.params.id
            }
        })
        .then(pelicula=>{
            res.send(pelicula)
        })
        .catch(e=>{
            res.send(e)
        })
    },
    create:(req,res)=>{
        db.Peliculas.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.duracion,
            release_date: req.body.fechaDeEstreno
        })
    },
    edit:(req,res)=>{
        db.Peliculas.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.duracion,
            release_date: req.body.fechaDeEstreno
            },
            {
            where:{
                id: req.params.id   
            }
        })
    },
    delete:(req,res)=>{
        db.Peliculas.destroy({
            where:{
                id: req.params.id
            }
        })
    }
}