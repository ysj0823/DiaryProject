const express = require("express");
const router = express.Router();

const ctrl = require("../controller/indexController")
// root
router.get('/', ctrl.signin);

router.get('/login', ctrl.signup);

module.exports = router;//객체를 밖으로 내보냄. 
