import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export function ProtectedAdminRoute(){
    const isAdmin = useSelector((state) => state.user.user);
    console.log(isAdmin);
    return isAdmin == 'admin' ?<Outlet/> :<Navigate to={"/"} />
}