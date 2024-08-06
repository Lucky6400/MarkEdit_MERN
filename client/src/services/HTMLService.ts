import axios from "axios";
import { Service } from "./Service";
import { logger } from "../helpers/Logger";

export class HTMLService extends Service {
    constructor() {
        super();
    }

    async getHtml(mdtext: string): Promise<string | undefined> {
        try {
            const res = await axios.post(`${this.getBaseUrl}/api/gethtml`, { mdtext });
            const data = res.data;

            if (data.html) {
                return data.html;
            }
        } catch (error) {
            logger.logError(error)
        }
    }
}