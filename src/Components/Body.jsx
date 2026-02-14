import Browse from "./Browse";
import Header from "./Header";
import LoginPage from "./LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useDispatch } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();

  /* this is a old way 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //when user sign in
        const { uid, displayName, email ,photoURL } = user;
        dispatch(adduser({ id: uid, name: displayName, email: email , imageURL :photoURL }));
      } else {
        //when user log out 
        dispatch(removeuser())
      }
    });
  }, []);
  */

  //this is a new way 

  //   useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       await user.reload()
  //       //when user sign in
  //       const { uid, displayName, email ,photoURL } = auth.currentUser;
  //       dispatch(adduser({ id: uid, name: displayName, email: email , imageURL :photoURL }));
  //     } else {
  //       //when user log out 
  //       dispatch(removeuser())
  //     }
  //   });
  // }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
export default Body;
