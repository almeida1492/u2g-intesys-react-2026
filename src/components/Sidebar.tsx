export function Sidebar() {
  return (
    <aside style={{ 
      border: '2px solid black', 
      borderRadius: '25px', 
      width: '250px', 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '500px'
    }}>
      <h3 style={{ marginTop: 0, fontWeight: 'normal' }}>overview</h3>
      
      <ul style={{ listStyle: 'none', padding: 0, flexGrow: 1, marginTop: '20px' }}>
        <li style={{ marginBottom: '10px' }}>projects list</li>
        <li style={{ marginBottom: '10px' }}>projects list</li>
        <li style={{ marginBottom: '10px' }}>projects list</li>
        <li style={{ marginBottom: '10px' }}>projects list</li>
      </ul>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button style={{ border: '2px solid black', borderRadius: '12px', background: 'white', padding: '10px', fontSize: '1rem' }}>
          Settings
        </button>
        <button style={{ border: '2px solid black', borderRadius: '12px', background: 'white', padding: '10px', fontSize: '1rem' }}>
          logout
        </button>
      </div>
    </aside>
  );
}