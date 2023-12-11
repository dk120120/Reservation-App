class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/*const errorHandler = (mesage, status)=>{
 const err = new Error();
 err.status = status,
 err.message = message
 return err
}



*/

export default ErrorHandler;
