import { AppRouter } from '@/pages/api/trpc/[trpc]';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';


function getBaseUrl() {

    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        return {
            links: [
                httpBatchLink({
                    /**
                     * If you want to use SSR, you need to use the server's full URL
                     * @link https://trpc.io/docs/ssr
                     **/
                    url: `${getBaseUrl()}/api/trpc`,

                    // You can pass any HTTP headers you wish here
                    async headers() {
                        return {
                            // authorization: getAuthCookie(),
                        };
                    },
                }),
            ],
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: false,
});