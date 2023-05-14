var secondMiddleware = async (req, res, next) => { 
    console.log("This is a secondMiddleware.")
    next();
}

export default secondMiddleware;