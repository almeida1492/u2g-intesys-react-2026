import ReactDOM from 'react-dom/client'

import Header from '../src/components/Header'
import Sidebar from '../src/components/Sidebar'

function Component() {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Sidebar />
      </div>
    </div>
  )
}

const el = document.getElementById('root')

if (!el) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(el)

root.render(<Component />)
