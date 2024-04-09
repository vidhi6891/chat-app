import React, { FC, useContext } from "react";
import { LoginButton, MeetingIdContext, createMeetingId, MeetingType } from '../shared/constants';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const TopNav: FC = () => {
  const meetingContext = useContext(MeetingIdContext);
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    if(meetingContext?.meetingType === MeetingType?.existingMeeting?.value && !meetingContext?.meetingId) {
      meetingContext?.setMeetingIdError(true);
    } else {
      if(meetingContext?.meetingType === MeetingType?.newMeeting?.value) {
        const newMeetingId = createMeetingId(user);
        meetingContext?.setMeetingId(newMeetingId);
      }
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    }
  }; 

  const signOut = () => {
    meetingContext?.setMeetingId(null);
    meetingContext?.setMeetingIdError(false);
    meetingContext?.setMeetingType(MeetingType?.newMeeting?.value);
    auth.signOut();
  };

  return (
    <nav className="top-nav">
      <h1>Chat Box</h1>
      {meetingContext?.meetingId && user && <h3>Meeting ID: { meetingContext?.meetingId } </h3>}
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={LoginButton}
            alt="Sign in with google"
          />
        </button>
      )}
    </nav>
  );
};

export default TopNav;