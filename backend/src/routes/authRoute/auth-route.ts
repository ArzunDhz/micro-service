
import express from 'express'
import 
{
    activateAccount,
    forgotPassword,
    loginToAccount,
    registerAccount,
    resetPassword
} from '../../controller/authController';



const router = express.Router();

router.post('/createAdminAccount', registerAccount)
router.post('/loginToAccount', loginToAccount)
router.post('/activateAccount', activateAccount)
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', resetPassword)


export default router