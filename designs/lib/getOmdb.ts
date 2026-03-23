export default async function getOmdb(query: string) {
    const res = await fetch(`/api/omdb?movie-name=${query}`)

    if (!res.ok) {
        throw new Error("Failed to fetch movies from Omdb-api")
    }

    return res.json()
}