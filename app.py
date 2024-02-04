import os
import random
import string
import subprocess
from flask import Flask, request, send_from_directory, render_template, url_for

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    video = request.files['video']

    if not video:
        return 'Error: No video file received.'

  
    video_path = os.path.join(app.config['UPLOAD_FOLDER'], video.filename)

   
    random_string = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))

    audio_filename = os.path.splitext(video.filename)[0] + '_' + random_string + '.wav'
    audio_path = os.path.join(app.config['UPLOAD_FOLDER'], audio_filename)

   
    video.save(video_path)

   
    try:
        subprocess.run(['ffmpeg', '-i', video_path, '-acodec', 'pcm_s16le', '-ar', '44100', '-ac', '2', audio_path], check=True)
    except subprocess.CalledProcessError:
       
        os.remove(video_path)
        return redirect(url_for('index'))  
    
    os.remove(video_path)

    
    return send_from_directory(app.config['UPLOAD_FOLDER'], audio_filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
