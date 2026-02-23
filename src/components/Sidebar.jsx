import ReactDOM from 'react-dom/client'

const Button = ({ name }) => {
  return <button className='buttons'>{name}</button>
}

const HeadSidebar = ({ name }) => {
  return <div className='top-sidebar'>{name}</div>
}

const ContentSidebar = ({ name }) => {
  return <div className='content-sidebar'>{name}</div>
}

const FooterSidebar = () => {
  return (
    <div className='footer-sidebar'>
      <Button name='Settings' />
      <Button name='Logout' />
    </div>
  )
}

const Sidebar = () => {
  const projects = ['Project 1', 'Project 2', 'Project 3']
  return (
    <div className='sidebar'>
      <HeadSidebar name='Overview' />

      <div className='sidebar-content'>
        {projects.map((project, index) => (
          <ContentSidebar key={index} name={project} />
        ))}
      </div>

      <FooterSidebar />
    </div>
  )
}

export default Sidebar
