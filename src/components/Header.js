import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
  })
  .catch((error) => {
    navigate("/error");
  });
  };

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        const {uid, email, displayName, photoURL}  = user;
        dispatchEvent(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
      })
    );
    navigate("/browse");
      } else {
        dispatchEvent(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
   {
   user &&(
    <div className='flex p-2'>
          <img alt="usericon" className='w-12 h-12' src={user?.photoURL} />
          <button onClick={handleSignOut} className='font-bold text-white'>(Sing Out)</button>
        </div>
    )}
    </div>


  );
};

export default Header