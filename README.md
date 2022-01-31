
# Summary


# Built Using:
- react
- socket.io-client

# Setup
Clone the repository along with the chat-app-server.
run `npm install` in the terminal and then `npm start`.
To test the chat functionality, open an incognito window in chrome and go to localhost 3000.


# Bugs

- If two users try to log on at the same time, it's possible they could log on as the same user.
- The only way to log out is to refresh the page.
- If the server is shut down while two users are logged in, then you have to manually change the online status in the database for the users to be able to login again.