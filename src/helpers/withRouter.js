import { useLocation, useNavigate, useParams } from 'react-router-dom'

// const withRouter = (Component) => {
//   const ComponentWithRouterProps = (props) => {
//     let location = useLocation()
//     let navigate = useNavigate()
//     let params = useParams()
//     return (
//       <Component
//         {...props}
// location={location}
// navigate={navigate}
// params={params}
//       />
//     )
//   }
//   return ComponentWithRouterProps
// }

const withRouter = (Component) => (props) => {
  let location = useLocation()
  let navigate = useNavigate()
  let params = useParams()
  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  )
}

export default withRouter

// the main difference is that our class component does not receive
// location, navigate and params through HOOKS!
// it receives them from the PROPS
