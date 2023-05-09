import { DefaultData, CharactersData, EpisodesData, LocationsData } from "../interfaces/FetchInterfaces"
import { useEffect, useState } from "react"

const DEFAULT_URL: string = "https://rickandmortyapi.com/api"
const CHARACTER_URL: string = "https://rickandmortyapi.com/api/character"
const LOCATION_URL: string = "https://rickandmortyapi.com/api/location"
const EPISODE_URL: string = "https://rickandmortyapi.com/api/episode"

var ErrorType: Error
var ApiResponse: any

function useFetch(url: string = DEFAULT_URL) {
    const [data, setData] = useState(ApiResponse)
    const [error, setError] = useState(ErrorType)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        
        fetch(url)
            .then((response: Response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [])

    return { data, error, loading }
}

export default useFetch