import { FC, useEffect } from "react";
import RouterComponent from "./routers/router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { notification } from "./configs/notification.config";
// import { useDispatch } from "react-redux";
// import { setUserData } from "./store/user/userReducer";
import "./App.css";

const App: FC = () => {
  // const dispatch = useDispatch();

  const onLoad = async () => {
    try {
      //
    } catch (error) {
      if (error instanceof Error) {
        notification.error(error.message);
      }
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </>
  );
};

export default App;
