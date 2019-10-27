const imageUpload = document.getElementById("file");

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.ssdMobilenetv1.loadFromUri("/models")
]).then(start);

async function start() {
  const container = document.createElement("div");
  container.style.position = "relative";
  document.body.append(container);
  let image;
  let canvas;
  imageUpload.addEventListener("change", async () => {
    if (image) image.remove();

    if (canvas) canvas.remove();

    image = await faceapi.bufferToImage(imageUpload.files[0]);
    container.append(image);
    canvas = faceapi.createCanvasFromMedia(image);
    container.append(canvas);
    const displaySize = { width: image.width, height: image.height };
    faceapi.matchDimensions(canvas, displaySize);
    const detections = await faceapi
      .detectAllFaces(image)
      .withFaceLandmarks()
      .withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    resizedDetections.forEach(detection => {
      const box = detection.detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: "face"
      });
      drawBox.draw(canvas);
    });
  });
}
