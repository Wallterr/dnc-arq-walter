export const getApiData = async (endpoint, params) => {
    try {
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`)
        const response = await fetch(url, {
            method: 'GET',
        })

        if (!response.ok) {  // esse interrogação é uma negação, se der errado vai dar um erro especifico
            console.error(`Error: ${response.status}`)
        }

        const data = await response.json()

        return data

    } catch (e) {
        console.error('Catch error: ', e)
        
    }
}