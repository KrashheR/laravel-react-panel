import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../../contexts/ContextProdiver"

export default function GuestLayout() {
  const {token} = useStateContext();

  if(token) {
    return <Navigate to="/" />
  }

  return(
    <div>
      Put your
      <Outlet />
    </div>
  )
}