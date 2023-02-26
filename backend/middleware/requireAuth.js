const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = (req, res, next) => {
    //VERIFY AUTHENTICATION
    const { authorization } = req.headers

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({ error: 'Request is not authorized'})
    }
}

module.exports = requireAuth