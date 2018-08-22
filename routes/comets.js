let router = require('express').Router()
let Comets = require('../models/comet')

router.get('/', (req, res, next) => {
    Comets.find({})
        .then(comets => {
            return res.send(comets)
        })
        .catch(err => {
            return next(err)
        })
})
// OR
//         .then(comets => res.send(comets))
//         .catch(next)
// })

router.get('/:id', (req, res, next) => {
    Comets.findById(req.params.id)
        .then(comet => res.send(comet))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Comets.create(req.body)
        .then(comet => res.send(comet))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Comets.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "Comet updated!"
        }))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Comets.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: "Comet successfully deleted"
        }))
        .catch(next)
})

module.exports = router