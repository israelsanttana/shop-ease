
export interface interfaceProduct {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": {
        "id": number,
        "name": string,
        "image": string
    },
    "images": string[]

}
export const getProducts = async (url: string): Promise<interfaceProduct[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        const data: interfaceProduct[] = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};