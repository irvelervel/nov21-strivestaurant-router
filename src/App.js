import './App.css'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './components/Booking'

// in App we're going to declare different Route components
// what is a Route? is a separate component that mounts its content
// just on a specific URL

// BrowserRouter is basically just a wrapper. You want to wrap the entire application into it
// Routes is another wrapper, but you should put into it just the components that you want to
// dinamically mount based on the URL

function App() {
  return (
    // this <> is called a React Fragment
    // basically is just a wrapper that will not output anything
    // this is handy for following the react component rule of ALWAYS
    // returning one single element
    <BrowserRouter>
      <MyNavbar branding='Strivestaurant' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservations' element={<Booking />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

// <button className='btn btn-danger'>DANGER</button>
// the above way still works
// <Button variant='danger'>DANGER</Button>
// but this is more preferred, this way is more "speaking"
export default App
