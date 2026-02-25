import ReactDOM from 'react-dom/client'
import { App } from './App'
function Component(props: { a: string }) {
  return <div className='header'>This is right out of the oven: {props.a}</div>
}

const el = document.getElementById('root')

if (!el) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(el)

root.render(<App a="hey, I'm a prop!" />)
