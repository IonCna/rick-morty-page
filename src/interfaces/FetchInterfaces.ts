export interface DefaultData {
    characters: string
    locations: string
    episodes: string
}

export interface CharactersData extends ApiResponse {
    results: CharacterApiResults[]
}

export interface EpisodesData extends ApiResponse {
    results: EpisodesApiResults[]
}

export interface LocationsData extends ApiResponse {
    results: LocationsApiResults[]
}

interface ApiResponse {
    info: ApiInfo
}

interface CharacterApiResults {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: { name: string, url: string }
    location: { name: string, url: string }
    image: string
    episode: Array<string>
    url: string
    created: string
}

interface EpisodesApiResults {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<string>
    url: string
    created: string
}

interface LocationsApiResults {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<string>
    url: string
    created: string
}

interface ApiInfo {
    count: number
    pages: number
    next: string
    prev: null | string
}

