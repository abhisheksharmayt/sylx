import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome</h1>
      <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
        This portfolio has been decommissioned. You can view the archived version below.
      </p>
      <Link 
        href="/archive" 
        style={{ 
          padding: '1rem 2rem', 
          backgroundColor: '#333', 
          color: '#fff', 
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 500
        }}
      >
        View Archive Portfolio
      </Link>
    </main>
  );
}
