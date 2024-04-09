import { FC, useState } from 'react';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './styles/App.css';
import TopNav from "./components/TopNav";
import ChatBoxContainer from "./components/ChatBoxContainer";
import WelcomePage from "./components/WelcomePage";
import { MeetingIdContext, MeetingType } from './shared/constants';

const App: FC = () => {
  const [user] = useAuthState(auth);
  const [meetingId, setMeetingId] = useState(null);
  const [meetingType, setMeetingType] = useState(MeetingType?.newMeeting?.value);
  const [meetingIdError, setMeetingIdError] = useState(false);

  return (
    <MeetingIdContext.Provider value={{ meetingId, 
      setMeetingId, 
      meetingType, 
      setMeetingType, 
      meetingIdError, 
      setMeetingIdError
    }}>
      <div className="App">
        <TopNav />
        {(!user || !meetingId) &&
          <WelcomePage />
        } 
        {user && meetingId &&
          <ChatBoxContainer />
        }       
      </div>
    </MeetingIdContext.Provider>
  );
};

export default App;