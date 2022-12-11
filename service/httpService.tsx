export const httpService = async (url: string, params: any) => {
        const result = await fetch(url, params)
        return result
}