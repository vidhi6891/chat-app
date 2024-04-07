import { FC } from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './styles/App.css';
import TopNav from "./components/TopNav";
import ChatBoxContainer from "./components/ChatBoxContainer";
import WelcomePage from "./components/WelcomePage";

const App: FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <TopNav />
      {!user ? (
        <WelcomePage />
      ) : (
        <>
          <ChatBoxContainer />
        </>
      )}
    </div>
  );
};

export default App;