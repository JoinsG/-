 let promiseTryCatch = async function (cb) {
    let success, err;
    try {
        await cb.then(res => {
            success = res;
        })
        return [success, undefined]
    } catch {
        return [undefined, err]
    }
}
 let qTryCatch = async function (cb) {
    let success, err;
    try {
        await cb.then(res => {
            console.log(res);
            success = res;
        })
        if (success.code === 1) {
            return [success, undefined]
        }else{
            err = success
            return [undefined,err]
        }
    } catch {
        return [undefined, err]
    }
}


module.exports = {
    promiseTryCatch,
    qTryCatch
}