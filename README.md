Video to Audio Converter Web App
Overview
This project is a simple web application that enables users to convert video files into audio files. Built with Flask, a robust web framework, and FFmpeg, a powerful audio processing tool, this app streamlines the conversion process.
Key Components
Flask App (main.py)
The core of the application, handling file uploads, conversion, and download processes.
Front-End
User-friendly interface built with HTML, CSS, and JavaScript, allowing users to:
Drag and drop or manually select video files
Initiate conversion with a button click
View a loading animation during processing
How It Works
Upload Your Video: Drag and drop or select your video file using the file picker.
Start the Conversion: Click the "Convert" button, and the app will:
Upload the video to the server
Convert it to an audio file using FFmpeg
Prepare the file for download
Download Your Audio: Once conversion is complete, the app will automatically download the audio file to your device.
Limitations
File Size Limit: Currently set to 100MB to ensure smooth processing and prevent excessive resource usage. Adjust this limit according to your needs or server capabilities.
