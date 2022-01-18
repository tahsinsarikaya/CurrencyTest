import axios from "axios";
import { IResponseBase } from "../../models/baseModel";
import { ICubeModel } from "../../models/CurrencyModels";

export class ICurrencyApiService {
    public getAll = async (): Promise<ICubeModel> => {
        const response = await axios.get<IResponseBase<ICubeModel>>('/api/currency/');
        debugger;
        if (response.data.success === true) {
            return response.data.result!;
        }
        return { cubes: [], time: "", xmlns: "" };
    }
}

export const currencyApiService = new ICurrencyApiService();