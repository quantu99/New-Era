import { API } from '@/constants/api';

export const ProductsApi = {
    getAll: (params, accessToken = null) => {
        return API.setAccessToken(accessToken).get('products', params);
    },
};
