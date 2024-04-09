import React, { FC, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { MeetingIdContext, MeetingType } from "../shared/constants";

const Welcome: FC = () => {
  const meetingContext = useContext(MeetingIdContext);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if(!user) {
      meetingContext?.setMeetingId(null);
      meetingContext?.setMeetingIdError(false);
      meetingContext?.setMeetingType(MeetingType?.newMeeting?.value);
      auth.signOut();
    }
  }, [])

  const handleChange = (event: any) => {
    meetingContext?.setMeetingType(event.target.value);
    meetingContext?.setMeetingIdError(false);
    meetingContext?.setMeetingId(null);
  }

  return (
    <main className="welcome-page">
      <h2>Doodle Meetings - Live Chat MVP</h2>
      <p>Sign in with Google to participate in group chat</p> 
      <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={MeetingType?.newMeeting?.value}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value={MeetingType?.newMeeting?.value} control={<Radio />} label={MeetingType?.newMeeting?.label} />
        <FormControlLabel value={MeetingType?.existingMeeting?.value} control={<Radio />} label={MeetingType?.existingMeeting?.label}/>
      </RadioGroup>
    </FormControl>
    { meetingContext?.meetingType === MeetingType?.existingMeeting?.value && 
      <div id="textboxes">
        Meeting ID: {"  "}
        <input type="text" onChange={(e) => {
            meetingContext?.setMeetingId(e.target.value);
            meetingContext?.setMeetingIdError(false);
          }}
        /> 
      </div>
    }
    { meetingContext?.meetingIdError && (
      <div className="meeting-id-error">Enter valid Meeting Id!!</div>
    )}
    </main>
  );
};

export default Welcome;
