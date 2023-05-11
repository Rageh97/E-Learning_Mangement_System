
import DashBoardLayout from "./DashboardLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function LayoutResolver({ children })
{
  const is_authintcated = useSelector(state => state.auth.is_authintcated)
  const navigate = useNavigate();
  useEffect(() => {
      if (!is_authintcated){
        navigate('/login')
      }
  }, [is_authintcated]); 



  return <DashBoardLayout> { children } </DashBoardLayout> ;

}