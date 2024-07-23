const express = require("express")
const { createOrUpdateSetting, getAllSettings } = require("../controllers/setting.controller")
const router = express.Router()

router.post('/setting/create', createOrUpdateSetting);
router.put('/setting/update/:id', createOrUpdateSetting);
router.get('/setting/getall', getAllSettings);

module.exports = router