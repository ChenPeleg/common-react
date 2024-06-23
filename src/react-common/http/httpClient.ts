export interface HttpClientConfig {
    url?: string;
    mode?: RequestMode | undefined;
    cache?: RequestCache | undefined;
    credentials?: RequestCredentials | undefined;
    redirect?: RequestRedirect | undefined;
    referrerPolicy?: ReferrerPolicy | undefined;
    baseURL?: string;
    headers?: Record<string, string>;
    params?: never;
    timeout?: number;
    withCredentials?: boolean;
    auth?: never;
}

export class HttpClient {
    config: HttpClientConfig;
    private _interceptors = {
        onFulfilled: (value: Promise<Response>) => value,
        onRejected: (error: Promise<Response>) => error,
    };
    interceptors = {
        use: (
            onFulfilled?: (value: Promise<Response>) => Promise<Response>,
            onRejected?: (error: Promise<Response>) => Promise<Response>
        ) => {
            this._interceptors.onFulfilled =
                onFulfilled || this._interceptors.onFulfilled;
            this._interceptors.onRejected =
                onRejected || this._interceptors.onRejected;
        },
    };

    constructor(config: HttpClientConfig) {
        this.config = {
            mode: 'cors', // no-cors, *cors,  same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
            ...config,
        };
        this.config.headers = config.headers || {};
        this.config.headers['Content-Type'] =
            this.config.headers['Content-Type'] || 'application/json';
    }

    static create(config: HttpClientConfig) {
        return new HttpClient(config);
    }

    static async fetchWrapper(input: RequestInfo | URL, init?: RequestInit) {
        return fetch(input, init);
    }

    static buildBody(data: any, _options?: RequestInit) {
        if (data === undefined || data === null) {
            return undefined;
        }
        if (
            _options?.headers &&
            // @ts-expect-error this should work
            _options.headers['Content-Type'] === 'application/json' &&
            data
        ) {
            return JSON.stringify(data);
        }
        return data;
    }

    async request({
        url,
        method,
        body,
        options,
    }: {
        url: string;
        method: string;
        body: any;
        options?: RequestInit;
    }) {
        try {
            const fetchConfig: RequestInit = this.buildFetchConfig(
                method,
                body,
                options
            );

            const response = HttpClient.fetchWrapper(
                (this.config.baseURL || '') + url,
                fetchConfig
            );
            return this.responseWrapper(response);
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw error;
        }
    }

    async get(url: string, options?: any) {
        return this.request({
            url,
            method: 'GET',
            body: undefined,
            options,
        });
    }

    async post(url: string, body: any, options?: RequestInit) {
        if (body instanceof FormData) {
            options = { ...options };
            // @ts-expect-error this should work
            if (options?.headers['Content-Type'] === 'auto') {
                // @ts-expect-error this is a FormData object
                delete options.headers['Content-Type'];
            }
        }

        return this.request({
            url,
            method: 'POST',
            body,
            options,
        });
    }

    async put(url: string, body: any, options?: RequestInit) {
        return this.request({
            url,
            method: 'PUT',
            body,
            options,
        });
    }

    async delete(url: string, options?: RequestInit) {
        return this.request({
            url,
            method: 'DELETE',
            body: undefined,
            options,
        });
    }

    async responseWrapper(
        response: Promise<Response>
    ): Promise<Response & { data?: any }> {
        if (response instanceof Error) {
            return this._interceptors.onRejected(response);
        } else {
            response = this._interceptors.onFulfilled(response);
        }
        if (
            this.config?.headers &&
            this.config.headers['Content-Type'] === 'application/json'
        ) {
            const originalResponse = await response;
            if (!originalResponse.ok) {
                throw new Error('Network Error');
            }
            const ResponseInit: ResponseInit = {
                headers: originalResponse.headers,
                status: originalResponse.status,
                statusText: originalResponse.statusText,
            };
            const clone = new Response(null, ResponseInit);
            const data = await originalResponse.json();
            // @ts-expect-error adding data to the response object
            clone.data = data;
            return clone;
        }
        return response;
    }

    buildFetchConfig(
        method: string = 'GET',
        data: any,
        _options?: RequestInit
    ): RequestInit {
        const { headers, mode, cache, credentials, redirect, referrerPolicy } =
            this.config;
        return {
            method,
            mode,
            cache,
            credentials,
            headers,
            redirect,
            referrerPolicy,
            body: HttpClient.buildBody(data, _options), // body data type must match "Content-Type" header
            ..._options,
        };
    }
}
