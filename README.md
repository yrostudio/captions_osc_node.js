# THEATRE SUBTITLES ON AUDIENCE PHONE/TABLET USING OSC MESSAGE AND NODE.JS
<br>Send OSC message to a node.js server so audience could read subtitles on their phone<br>

_

. Install Node.js: You'll need Node.js installed on your machine to run the code. You can download it from the official Node.js website: https://nodejs.org/en/download/

. Create a new folder: Create a new folder on your machine where you'll save your project files. You can name the folder whatever you like.

. Terminal: Open a terminal or command prompt window and navigate to the folder you just created using the cd command.

. Initialize a new Node.js project: Run the following command in the terminal to initialize a new Node.js project in the folder : 
npm init -y
This will create a package.json file in the folder, which is used to manage the project's dependencies and metadata.

. Install dependencies: Run the following commands in the terminal to install the necessary dependencies for the project:

npm install express
npm install socket.io
npm install osc

. Create the server file: Create a new file in the folder and name it server.js. Copy and paste the server code I provided earlier into this file.

. Create the HTML file: Create a new file in the folder and name it index.html. Copy and paste the HTML code I provided earlier into this file.

. Start the server: Run the following command in the terminal to start the server:
node server.js

. Test the server: Open a web browser and navigate to http://localhost:3000. If you send an OSC message to the server on port 57121 (or the port you specified in the code), the h1 element should update with the contents of the message.
  
Message OSc should be /captions string
Try the Maxmsp patch to send message.
  
  
