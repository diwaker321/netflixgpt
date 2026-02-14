import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { adduser, removeuser } from "../Utils/Store/userInfoSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        //when user sign in
        const { uid, displayName, email, photoURL } = auth.currentUser;
        dispatch(
          adduser({
            id: uid,
            name: displayName,
            email: email,
            imageURL: photoURL,
          }),
        );
        navigate("/browse")
      } else {
        //when user log out
        dispatch(removeuser());
        navigate("/")
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" p-3 bg-gradient-to-b from-black flex items-center justify-between">
      <div className="netfliximg">
        <img
          className="w-35"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
      </div>
      <div>
        {location?.pathname === "/browse" && (
          <button
            className="bg-red-700 text-white px-3 py-1 font-semibold rounded-md cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
