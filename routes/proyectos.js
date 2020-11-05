const express = require('express');
const router = express.Router();

var Proyectos = require('../models/proyecto');

router.get('/', (req, res) => {
    var proyectos = new Proyectos();
    proyectos.cargarProyectos()
        .then(function(dato) {
            if (dato && dato.length > 0) {
                let lista = dato.map((fila) => {
                    return fila
                });
                return res.status(200).json({
                    ok: true,
                    resp: lista
                });
            } else {
                return res.status(200).json({
                    ok: false,
                    mensaje: 'No se encontraron proyectos'
                });
            }
        }).catch(function(err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error interno'
            });
        });
});

module.exports = router;