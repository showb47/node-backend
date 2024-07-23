const express = require('express')
const { userSignup, userLogin,  allUser, userUpdate, userDelete, singleUserById, } = require('../controllers/user.controller')
const router = express.Router()


router.post('/user/signup', userSignup)
router.post('/user/login',userLogin)
router.get('/user/alluser', allUser)
router.put('/user/Update/:id', userUpdate )
router.delete('/user/delete/:id', userDelete )
router.get('/user/singleuserbyid/:id', singleUserById )

module.exports = router


///home work/////



