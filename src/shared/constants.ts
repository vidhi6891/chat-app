import { createContext } from 'react';
import { User } from 'firebase/auth';
import { meetingContextType } from './types';
import { md5 } from 'js-md5';

export const LoginButton = '/google_signin_btn.png';

export const MeetingIdContext = createContext<meetingContextType | null>(null);

export const createMeetingId = (user: any) => {
    const currentTimeStamp = Date.now();
    return md5(`${user}${currentTimeStamp}`);
}

export const MeetingType = {
    newMeeting: {
        label: 'New Meeting',
        value: 'new_meeting'
    },  
    existingMeeting: {
        label: 'Existing Meeting',
        value: 'existing_meeting'
    }
}