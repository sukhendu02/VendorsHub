const express = require('express');
const app = express();

// const{queryForm} = require('../Controllers/authControllers');
const QueryForm = require('../Modals/QueryForm');
const queryForm = require('../Controllers/commonControllers').queryForm;

const router = express.Router();



router.post('/queryform', queryForm );

module.exports = router;