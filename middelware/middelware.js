const logger = (req ,res , next)=>{

    console.log(` method : ${req.method} protocol : ${req.protocol} host : ${req.get('host')}`)
    
    next();
}

module.exports = logger