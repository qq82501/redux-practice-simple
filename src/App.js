import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  console.log(111, isAuth);

  return (
    <React.Fragment>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
