var convertButton = document.getElementById('convertButton');
var loadingBox = document.getElementById('loadingBox');
var fileInput = document.getElementById('file');
var dragArea = document.getElementById('dragArea');
var downloadStatus = document.getElementById('downloadStatus');

convertButton.addEventListener('click', convertAndDownload);

function convertAndDownload() {
  var file = fileInput.files[0];
  if (!file) {
    alert('Please select a video file.');
    return;
  }

  var fileSize = file.size; // Get the size of the selected file in bytes
  if (fileSize > 100 * 1024 * 1024) {
    alert('File size exceeds the maximum limit of 100MB.');
    return;
  }

  convertButton.disabled = true;
  loadingBox.style.display = 'flex';

  var reader = new FileReader();
  reader.onload = function (event) {
    var videoData = event.target.result;
    var videoBlob = new Blob([videoData], { type: file.type });

    var formData = new FormData();
    formData.append('video', videoBlob, file.name);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/convert', true);
    xhr.responseType = 'blob';
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var blob = xhr.response;

          // Create a temporary link element to trigger the download
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = file.name.replace(/\.[^/.]+$/, '') + '.wav';
          link.style.display = 'none';

          // Append the link to the document body and click it programmatically
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Show the download status message
          showStatusMessage('Thank you for downloading!', false);
        } else {
          showStatusMessage('Failed to convert video.', true);
        }
        convertButton.disabled = false;
        loadingBox.style.display = 'none';
      }
    };
    xhr.send(formData);
  };
  reader.readAsArrayBuffer(file);
}

function showStatusMessage(message, isError) {
  downloadStatus.textContent = message;
  if (isError) {
    downloadStatus.classList.add('error');
  } else {
    downloadStatus.classList.remove('error');
  }
}
