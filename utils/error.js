export const createError = (status, message) => {
    const arr = new Error();
    err.status = status;
    err.message = message;
    return err;
};