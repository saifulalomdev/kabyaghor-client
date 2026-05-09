import { createAuthClient } from 'better-auth/client';
import { magicLinkClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
    baseURL: "http://localhost:8787",
    plugins: [
        magicLinkClient()
    ]
});