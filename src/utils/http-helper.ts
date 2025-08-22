interface HttpResponse {
    statusCode: number;
    body: any;
}

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data,
    };
}