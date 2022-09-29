import { ModernHouserResponse } from '@/models';
import axios from 'axios';

export const modernHouseApi = axios.create({
    baseURL: `https://modern-houses-api-production.herokuapp.com/api/v1`
})

export const getHouses = async () => {

    try {
        const { data, status } = await modernHouseApi.get<ModernHouserResponse>('/houses/California?city=San%20Francisco')
        if (status === 200) return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}