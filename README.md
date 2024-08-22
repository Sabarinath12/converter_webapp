This project is a simple web app that lets you convert video file into audio file. 
It’s built with Flask, a web framework that takes care of handling the file uploads and running the conversion, 
and uses FFmpeg to turn your videos into .wav audio file.

What It Does:
#Flask App (main.py): This is the brain of the operation. 
It handles everything behind the scenes—when you upload a video, it saves the file, converts it to audio using FFmpeg, and then lets you download the audio file.
#Front-End: The user interface (created with HTML, CSS, and JavaScript) is where you interact with the app. 
You can drag and drop your video file or select them manually, click the button to start the conversion, and watch a loading animation while it processes.

How It Works:
#Upload Your Video: You can either drag your video file onto the webpage or select it using the file picker.
#Start the Conversion: Hit the "Convert" button, and the app will handle the rest. 
It uploads the video to the server, converts it to an audio file, and gets it ready for download.
#Download Your Audio: Once the conversion is complete, the app will automatically download the audio file to your device

Limitations added:
The app currently limits uploads to 100MB to keep things running smoothly and avoid processing excessively large files. 
However, you can adjust this limit based on your needs or server capabilities.
