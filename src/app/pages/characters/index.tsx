import useFetch from "../../../hooks/useFetch"
import ErrorHandler from "../../../components/error.component"
import Loading from "../../../components/loading.component"

import { CharactersData } from "../../../interfaces/FetchInterfaces"

const URL: string = "https://rickandmortyapi.com/api/character"

const Characters = () => {
    const { data, error, loading } = useFetch(URL)

    const char_data: CharactersData[] = data as CharactersData[];

    console.log(char_data)
    return (
        <div className="characters">
            {error && <ErrorHandler />}
            {loading && <Loading />}
        </div>
    )
}

export default Characters