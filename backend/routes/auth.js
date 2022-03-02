import {Router} from "express"
import User     from "../models/User.js"
import CryptoJS from "crypto-js"
import jwt      from "jsonwebtoken"

const router = Router()

//REGISTER
router.post("/register", async (req, res) => {

  const encrypted_pw = CryptoJS.AES.encrypt( req.body.password, process.env.PW_SECRET ).toString()

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encrypted_pw,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

// 1) find requested user
// 2) decrypt password
// 3) validate password
// 4) give access token
// 5) return access token and userdata without password

router.post('/login', async (req, res) => {
  try{
    const user = await User.findOne({userName: req.body.user_name});
    !user && res.status(401).json("Wrong User Name");

    const hashedPassword   = CryptoJS.AES.decrypt( user.password, process.env.PW_SECRET);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword    = req.body.password;
    
    originalPassword !== inputPassword && res.status(401).json("Wrong Password");

    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin},process.env.JWT_SECRET,{expiresIn:"3d"});

    const { password, ...others } = user._doc;  
    res.status(200).json({...others, accessToken});

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }

});

export default router