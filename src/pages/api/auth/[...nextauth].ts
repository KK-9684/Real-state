import NextAuth from "next-auth";

import { authOptions } from "apple/server/auth";

export default NextAuth(authOptions);
