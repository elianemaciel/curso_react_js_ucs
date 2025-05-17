import axios, { AxiosInstance } from "axios";

class PotterAPI {
    private url: string;
    private api: AxiosInstance;

    constructor() {
        this.url = "https://potterapi-fedeperin.vercel.app";

        this.api = axios.create({
            baseURL: this.url,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    }

    async getBooks() {
        const response = await this.api.get('/pt/books');
        return response
    }
}

export default PotterAPI;