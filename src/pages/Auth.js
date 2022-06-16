import Login from "../routes/Login";
import Register from "../routes/Register";
import { Routes, Route } from "react-router-dom";

const Auth = ({ changeAuth }) => {
    return ( 
        <div className="page auth-page">
            <Routes>
                <Route path="/*">
                    <Route index element={<Login changeAuth={changeAuth}/>}/>
                    <Route path="register" element={<Register />}/>
                </Route>
            </Routes>
        </div>
     );
}
 
export default Auth;