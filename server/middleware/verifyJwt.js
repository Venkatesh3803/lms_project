import jwt from "jsonwebtoken"


export const verifyJwt = async (req, res, next) => {
    const authHeaders = req.headers;
    if (!authHeaders) return res.status(401).json("UnAuthorized")
    const token = authHeaders.authorization.split(" ")[1];
    try {
        jwt.verify(token, process.env.JWT_TOKEN, async (err, user) => {
            if (err) return res.status(401).json(err.message)
            req.user = user
        })
        next()
    } catch (error) {
        return error.message
    }
}


export const verifyTokenAndAuthorization = async (req, res, next) => {
    verifyJwt(req, res, () => {
        try {
           
            if (req.user.id === req.body.userId) {
                next();
            } else {
                return res.status(401).json("unAuthiorized");
            }
        } catch (error) {
            res.status(401).json(error.message);
        }

    })

}