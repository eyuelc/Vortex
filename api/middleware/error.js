const error = (err, req, res, next) => {
    if(err.status) {
        req.status(err.status).json({'msg': err.message || 'Not found'})
    }else{
        req.status(500).json({'msg': err.message || 'Not found'})
    }
}

export default error;