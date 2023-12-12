import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: "/check-out",
};

// matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/check-out", "/(api|trpc)(.*)"],
