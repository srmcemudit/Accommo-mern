const jwt = require('jsonwebtoken');

module.exports.Validate = (req,res,next) =>{
    try {
        const token = req.cookie.token;
        console.log(token);
        if (!token) {
            return res.status(403).json({ status: false, message: 'You are not logged in.' });
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.status(403).json({ status: false, message: err.message });
            else {
                req.userid = user.id;
                req.userName = user.userName;
                next();
            }
        });
    } catch (error) {
        res.status(401).json({ staus: false, message: error.message });
    }
}