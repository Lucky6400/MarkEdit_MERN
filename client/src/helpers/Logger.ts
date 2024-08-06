import { AxiosError } from "axios";

/** Singleton class to log messages */
class Logger {
    private static _instance: Logger;

    private constructor() {}

    static get getInstance(): Logger {
        if(!this._instance) this._instance = new Logger();
        return this._instance;
    }

    public logError(error: unknown): void {
        error instanceof AxiosError ? console.log(error.response?.data) : console.log(error);
    }
}


export const logger = Logger.getInstance;
