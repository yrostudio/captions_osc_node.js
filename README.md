# THEATRE SUBTITLES ON AUDIENCE PHONE/TABLET USING OSC MESSAGE AND NODE.JS
<br>Send OSC message to a node.js server so audience could read subtitles on their phone<br>

_

. Install Node.js: You'll need Node.js installed on your machine to run the code. You can download it from the official Node.js website: https://nodejs.org/en/download/

. Create a new folder: Create a new folder on your machine where you'll save your project files. You can name the folder whatever you like.

. Terminal: Open a terminal or command prompt window and navigate to the folder you just created using the cd command.

. Initialize a new Node.js project: Run the following command in the terminal to initialize a new Node.js project in the folder : 

_npm init -y_

<br>

This will create a package.json file in the folder, which is used to manage the project's dependencies and metadata.

. Install dependencies: Run the following commands in the terminal to install the necessary dependencies for the project:

_npm install express_

_npm install socket.io_

_npm install osc_

<br>

. Create the server file: Paste server.js in that folder.

. Create the HTML file: Paste index.html in that folder.

. Start the server: Run the following command in the terminal to start the server:

_node server.js_
<br>

. Test the server: Open a web browser and navigate to http://localhost:3000. If you send an OSC message to the server on port 57121 (or the port you specified in the code), the h1 element should update with the contents of the message.

. Connect your computer to an open wifi network. Set your ip manual.

![Screenshot 2023-05-15 at 09 14 54](https://github.com/yrostudio/live_subtitles_osc_node.js/assets/59850990/f672fd3e-8795-4f07-9b79-e27a4f21c456)

. Give the audience the adresse : 192.168.1.66:3000
 
.Send Message OSC should be /captions string or 0 (to fade out the message)

![IMG_6850](https://github.com/yrostudio/live_subtitles_osc_node.js/assets/59850990/be57042b-d4c6-4f26-8aa3-db99d1038958)


. Try the Maxmsp patch to send message.


  <img width="902" alt="Screenshot 2023-05-15 at 10 12 08" src="https://github.com/yrostudio/live_subtitles_osc_node.js/assets/59850990/98af5553-66c1-4a73-bd6f-26d3071d5bd3">

  
