import ReactCrop from 'react-image-crop';

const image = new Image();
image.onload = cutImageUp;
image.src = 'myimage.png';

function cutImageUp() {
    const imagePieces = [];
    for(let x = 0; x < numColsToCut; ++x) {
        for(let y = 0; y < numRowsToCut; ++y) {
            const canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            const context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image

    // load one piece onto the page
    const anImageElement = document.getElementById('myImageElementInTheDom');
    anImageElement.src = imagePieces[0];
}