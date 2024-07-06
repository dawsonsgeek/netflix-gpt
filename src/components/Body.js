import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const {uid, email, displayName, photoURL}  = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //     })
  //   );

  //       // console.log(user);
  //     } else {
  //       // User is signed out

  //       // console.log("User is signed out");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
