import { Route,  Redirect } from 'react-router-dom';




const PrivateRoute = ({isAuth: isAuth, component:Component,...rest}) => {
    return(
        <Route {...rest} render={(props)=>{
          return isAuth ? <Component/> : <Redirect to = {{pathname:'/', state: {from:props.location}}}/>
        }}/>
    )
}




export default PrivateRoute;