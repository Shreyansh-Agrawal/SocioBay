import React from "react";
import Navbar from './components/Navbar'

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border realtive`,
};

function App() {
  const [user] = useAuthState(auth)
  console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
      </section>
    </div>
  );
}

export default App;
