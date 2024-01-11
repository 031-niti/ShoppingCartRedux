import React from 'react'
import Home from './Home'
import MyCart from './MyCart'
import { useSelector } from 'react-redux'

const Page = () => {
  const page = useSelector((state) => state.pages);
  return (
    <div>
      {page.HOME ? <Home /> : <MyCart/>}
    </div>
  );
};

export default Page