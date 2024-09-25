// Utility file so we don't have to wrap each controller code with a try/catch : it's done once for all.

export function controllerWrapper(middleware) {
  return async (req, res, next) => {
    try {
      // Call the controller
      await middleware(req, res, next);
    } catch (error) {
      // In case of failure, call the global errorHandler
      next(error);
    }
  };
}
