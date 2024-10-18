



const result = (req, res, next) => {
    try {
        const error = new Error('돈이 없어서 구현 못 함');
        return res.status(400).json({
            code: 400,
            message: error,
        });
    } catch (e) {
        throw e;
    }


}

module.exports = { result };