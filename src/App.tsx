import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Rendu du Header */}
      <Header />
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Rendu de la Sidebar */}
        <Sidebar />

        {/* Zone principale (Main Content) */}
        <main style={{ 
          flexGrow: 1, 
          border: '2px solid black', 
          borderRadius: '25px', 
          padding: '30px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <button style={{ 
            border: '2px solid black', 
            borderRadius: '12px', 
            background: 'white', 
            padding: '10px 20px',
            width: 'fit-content',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            create project
          </button>

          <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
            {/* Utilisation de la carte réutilisable avec des props différentes */}
            <ProjectCard title="Title" id="card" />
            <ProjectCard title="Analyse" id="002" />
          </div>

          <div style={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '2rem',
            color: '#333',
            marginTop: '50px'
          }}>
            projects overview
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;