import axios from "axios"

const API_URL = "http://localhost:3000"
type getListParams = {
    resource: string,
}
type deleteParams = {
    resource: string,
    id: string,
}

const dataProvider = {

    getList: async ({ resource }: getListParams) => {
        const response = await axios.get(`${API_URL}/${resource}`)
        return response.data.map((product: any) => ({
            key: String(product.id),
            ...product,
        }));
    },
   
}

export const { getList } = dataProvider;