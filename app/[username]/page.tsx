// app/[username]/page.tsx
export default async function ResumePage({ params }: { params: { username: string } }) {
  try {
    // Use relative URL for server-side fetch, or construct absolute URL
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
                    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    const response = await fetch(
      `${baseUrl}/api/resume?username=${params.username}`,
      {
        // Add cache control for server components
        cache: 'no-store', // or 'force-cache' if you want caching
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.statusText}`);
    }

    const data = await response.json();

    return (
      <div>
        <h1>Resume for {params.username}</h1>
        <p>{data.message}</p>
        {data.username && <p>Username: {data.username}</p>}
      </div>
    );
  } catch (error) {
    console.error('Error fetching resume:', error);
    return (
      <div>
        <h1>Resume for {params.username}</h1>
        <p>Error loading resume. Please try again later.</p>
      </div>
    );
  }
}
  