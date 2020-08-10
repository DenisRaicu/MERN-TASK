// Rutas para autenticar usuarios:
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Iniciar Sesión:
// api/auth:
// [
//     check('email', 'Agrega un email válido').isEmail(),
//     check('password', 'El password debe ser minimo de 6 caracteres').isLength({min: 6})
// ],
router.post('/', authController.autenticarUsuario);

// Obtine el usuario autenticado:
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;