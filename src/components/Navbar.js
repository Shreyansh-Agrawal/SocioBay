import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4 absolute top-0 position: sticky z-[1]`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>SocioBay</h1>
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
}

export default Navbar