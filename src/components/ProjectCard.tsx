interface CardProps {
  title: string;
  id: string;
}

export function ProjectCard(props: CardProps) {
  return (
    <div style={{ 
      border: '2px solid black', 
      borderRadius: '20px', 
      padding: '20px', 
      width: '200px',
      backgroundColor: 'white'
    }}>
      <h4 style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>{props.title}</h4>
      <p style={{ margin: 0, lineHeight: '1.5' }}>
        Description<br/>
        Created by<br/>
        N° {props.id}
      </p>
    </div>
  );
}