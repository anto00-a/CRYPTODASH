import { Route,  Redirect } from 'react-router-dom';




const PrivateRoute = ({isAuth: isAuth, component:Component,...rest}) => {

    return(
        <Route {...rest} render={ (props)=>{
          return isAuth ? <Component {...props}/> : <Redirect to = {{pathname:'/', state: {from:props.location}}}/>
        }}/>
    )
}




export default PrivateRoute;