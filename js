document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var file = document.getElementById('fileUpload').files[0];
  var data = new FormData();
  data.append('file', file);

  var config = {
    method: 'post',
    url: 'https://studio.mohir.ai/api/v1/stt',
    headers: {
      Authorization: '684e3ecd-4692-48c9-9ad5-d0aefda4078f:daf8ea84-2580-4a4b-8049-8b7eacf15bf8',
      ...data.getHeaders(),
    },
    data: data,
  };

  axios(config).then(function(res) {
    console.log(res.data);
  });
});
