import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <WelcomePage />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;