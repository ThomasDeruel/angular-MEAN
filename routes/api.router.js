/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition des routes
*/
// Accueil
router.get('/', (req, res) => {
    res.json({"msg": "coucou"});
});
//


/*
Exporter le module de route
*/
module.exports = router;
//