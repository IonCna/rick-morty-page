import { useEffect, useState } from "react"

const DEFAULT_URL: string = "https://rickandmortyapi.com/api"

var ErrorType: Error
var DataType: any[]

function useFetch(url: string = DEFAULT_URL) {
    const [data, setData] = useState(DataType)
    const [error, setError] = useState(ErrorType)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        
        fetch(url)
            .then((response: Response) => response.json())
            .then((data: any[]) => setData(data))
            .catch((error: any) => setError(error))
            .finally(() => setLoading(false));
    }, [])

    return { data, error, loading }
}

export default useFetch