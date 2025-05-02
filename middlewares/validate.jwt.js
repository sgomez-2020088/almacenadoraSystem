'use strict '
import jwt from 'jsonwebtoken'

export const validateJwt = async(req, res, next) =>{
    try {
        let secretKey = process.env.SECRET_KEY
        let { authorization } = req.headers
        if(!authorization) return res.status(401).send({success: false, message: 'Unauthorizated'})
        if(authorization.status == 'false') {
            return res.status(404).send({ succes: false, message: 'user not found'})}
        let user = jwt.verify(authorization,secretKey)
        req.user = user
        next()
        } catch (err) {
        console.error(err)
        return res.status(401).send({success: false, message: 'Invalid Token'})
    }
}

export const isAdmin = async(req, res, next)=>{
    try{
        const {user} = req
        console.log(user)
        if(!user || user.role !== 'ADMIN') return res.status(403).send(
            {
                success: false,
                message: `You dont have access | username ${user.username}`
            }
        )
        
        next()
    }catch(err){
        console.error(err)
        return res.status(403).send(
            {
                success: false,
                message: 'Unauthorized role'
            }
        )
    }
}
