import ReactDom from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import App from './App'

let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)