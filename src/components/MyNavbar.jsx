import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// RULES OF HOOKS:
// 1) just use hooks in react functional components
// 2) just use hooks at the top level of your component, outside of loops, if/else, etc.

const MyNavbar = (props) => {
  const location = useLocation()
  console.log('location is', location)

  const navigate = useNavigate()
  console.log('navigate is', navigate)

  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Link to='/'>
        <Navbar.Brand>{props.branding}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link to='/menu'>
            <div
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </div>
          </Link>
          <Link to='/reservations'>
            <div
              className={
                location.pathname === '/reservations'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Reservation
            </div>
          </Link>
          <Link to='/contact'>
            <div
              className={`nav-link${
                location.pathname === '/contact' ? ' active' : ''
              }`}
            >
              Contact us!
            </div>
          </Link>
        </Nav>
        <Button
          onClick={() => {
            setTimeout(() => {
              navigate('/')
            }, 500)
          }}
        >
          TAKE ME HOME
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
