
import React from 'react';
import { defaultPageForAuth }  from '../../core/page'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function GuestLayout ({ children }) {

  const is_authintcated = useSelector(state => state.auth.is_authintcated)
  const navigate = useNavigate();
  useEffect(() => {
      if (is_authintcated){
        navigate(defaultPageForAuth.path)
      }
  }, [is_authintcated]); 

  return (
    <>
      { children }
    </>
  );

}