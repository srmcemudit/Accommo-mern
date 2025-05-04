const jwt = require('jsonwebtoken');

module.exports.Validate = (req,res,next) =>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ status: false, message: 'You are not logged in.' });
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.status(403).json({ status: false, message: err.message });
            else {
                next();
            }
        });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
}