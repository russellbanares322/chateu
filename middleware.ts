import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import { routePaths } from "./data/route-paths";

const { SIGN_IN_PATH } = routePaths
const isSignInPage = createRouteMatcher([SIGN_IN_PATH]);
const isProtectedRoute = createRouteMatcher(["/product(.*)"]);
const isInProtectedRoute = createRouteMatcher(["/"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  if (isSignInPage(request) && (await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, "/product");
  }
  if (isProtectedRoute(request) && !(await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, SIGN_IN_PATH);
  }

  if(isInProtectedRoute(request) && !(await convexAuth.isAuthenticated())){
    return nextjsMiddlewareRedirect(request, SIGN_IN_PATH)
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
