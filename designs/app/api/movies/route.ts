export async function GET() {
    try {
      const res = await fetch("http://localhost:3001/movies", {
        cache: "no-store",
      })
  
      if (!res.ok) {
        return new Response("Failed to fetch from json-server", {
          status: res.status,
        })
      }
  
      const data = await res.json()
      return Response.json(data)
  
    } catch (error) {
      return new Response("Server error connecting to json-server", {
        status: 500,
      })
    }
  }