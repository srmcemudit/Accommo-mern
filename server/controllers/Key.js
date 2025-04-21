const getKey = (req,res) =>{
    try {
        res.status(200).json({key:process.env.key_id})
    } catch (error) {
        res.status(401).json(error)
    }
}
module.exports = getKey;