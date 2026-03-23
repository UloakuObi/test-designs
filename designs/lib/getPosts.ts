export default async function getPosts() {
    const res = await fetch("/api/posts")

    if (!res.ok) {
        throw new Error("Failed to fetch posts")
    }

    return res.json()
}