import { Request, Response, NextFunction } from 'express';

function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  if (err.message.includes('Cast to ObjectId failed')) {
    statusCode = 400;
    message = 'Invalid product id';
  }

  res.status(statusCode);
  res.json({
    message: err.message,
  });
}

export { notFound, errorHandler };
