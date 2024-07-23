const express = require('express')
const { adminSignup, adminLogin, allAdmin, adminUpdate, adminDelete, singleAdminById } = require('../controllers/admin.controller')
const router = express.Router()


router.post('/admin/signup', adminSignup)
router.post('/admin/login',adminLogin)
router.get('/admin/alladmin', allAdmin)
router.put('/admin/Update/:id', adminUpdate )
router.delete('/admin/delete/:id', adminDelete )
router.get('/admin/singleadminbyid/:id', singleAdminById)

module.exports = router


///home work/////



