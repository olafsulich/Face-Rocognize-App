
## What I'm learned? 
* Face API.
* Working with Async/Await and public API
## Project title
App which recognize faces from picture.
## Motivation
I wanted to discover and learn some API. I choose [Face API](https://github.com/justadudewhohacks/face-api.js/)
## Screenshots
![Design](https://i.ibb.co/P6nTkKw/ss.png)


## Tech/framework used
- HTML5
- SCSS
- ES6+

## Code Example/Issues

I used Face API documentation when I had some problems.

```bash
 const detections = await faceapi
      .detectAllFaces(image)
      .withFaceLandmarks()
      .withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
```


## Installation
```bash
npm install 
```

## Credits
https://github.com/justadudewhohacks/face-api.js/helps me with many problems.
