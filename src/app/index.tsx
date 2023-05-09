import useFetch from "../hooks/useFetch"

const URL = "https://rickandmortyapi.com/api/character"

const App = () => {
    const { data, error, loading } = useFetch(URL)

    console.log(data)
    return (
        <div className="landing-container">
            <p> { error && error.message } </p>
            <p> { loading && "Está cargando" } </p>
        </div>
    )
}

export default App