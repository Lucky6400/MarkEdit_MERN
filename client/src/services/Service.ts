import { BASE_URL } from "../constants/keys";

export abstract class Service {
    constructor(private baseUrl: string = BASE_URL) { }

    get getBaseUrl(): string {
        return this.baseUrl;
    }
}