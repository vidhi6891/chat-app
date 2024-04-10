# Doodle chat componenet 

As part of this POC we need to create a real-time chat component for Doodle meetings for organizers and participants to communicate via chat while the call is in progress. The scope of a chat session needs to be limited for each meeting and the history needs to be maintained within the same hierarchy. 

Working version of the chat is hosted here - https://doodlechat709.web.app/

1. First page is the login page - where the user has the option to either create a new meeting or join an existing meeting
![image](https://github.com/vidhi6891/chat-app/assets/45257472/40d85cef-4aba-44b2-9593-311a1f1fbb7e)

2. Once the organiser creats a meeting and signs in using google login - he will see the chat window. For a new meeting the chats will be empty
   ![image](https://github.com/vidhi6891/chat-app/assets/45257472/322f1e8b-8d14-4f72-8faf-affa1291b4d2)

3. Second user can join the same meeting using the meetingID - if he/she/they try to login without a meeting id the system gives a prompt to enter an ID
![image](https://github.com/vidhi6891/chat-app/assets/45257472/88bb0532-976e-4f78-9c5d-8016adb06071)
 
4. The second user can take the same meeting id - "82a22b47976181bdb583f149820441d9" and join the same meeting
![image](https://github.com/vidhi6891/chat-app/assets/45257472/2a356c7a-efb9-43e2-aa0a-35604f5770e9)

5. Live chat session
![image](https://github.com/vidhi6891/chat-app/assets/45257472/6faadd1b-2d06-4649-93be-fdbe3d6bfdf6)

6. We can create multiple chat sessions parallely and multiple meetings can go on with multiple chat sessions

As part of the POC tech stack used
1. React with Typescript for frontend
2. Firebase for backend - authentication, database, hosting and rest API 


