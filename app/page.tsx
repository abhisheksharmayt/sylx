import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100dvh',
      minHeight: 'auto',
      padding: '1rem',
      overflow: 'hidden',
      position: 'fixed',
      inset: 0,
      boxSizing: 'border-box'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(1.5rem, 5vw, 3rem)', 
        fontWeight: 700,
        textAlign: 'center',
        margin: 0,
        padding: '0 1rem',
        lineHeight: 1.2
      }}>
        Basecamp for Utility Products
      </h1>
      
      <p style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        marginTop: '1rem',
        fontSize: '0.75rem',
        color: '#999'
      }}>
        work in progress... 🔨
      </p>
      
      <Link 
        href="/archive" 
        className="portfolio-link"
        style={{ 
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#666',
          fontSize: '0.875rem'
        }}
      >
        view portfolio
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </Link>
    </main>
  );
}
