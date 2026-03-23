export async function GET() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", 
            {cache: "no-store"}
        )

        if (!res.ok) {
            return new Response(`Failed to fetch posts with error`, {status: res.status})
        }

        const posts = await res.json()
        return Response.json(posts)

    } catch(err) {
        return new Response(`Failed to fetch posts with error: ${err}`, {status: 500})

    }
}