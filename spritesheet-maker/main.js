const loadFiles = () => {
    //make an off-dom input element to open the file dialog
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = _ => {
        let files = input.files;
        files = Array.from(files);
        //calc the size of the grid needed to fit the total number of images
        spriteCount = files.length;
        const baseGridSize = Math.floor(Math.sqrt(spriteCount));
        gridDims = [baseGridSize, baseGridSize];
        if (baseGridSize * baseGridSize < spriteCount) {
            console.log("A square grid is not good enough");
            for (let i = 0; gridDims[0] * gridDims[1] < spriteCount; ++i%2) {
                gridDims[i]++;
            }
        }
        console.log(`Have ${spriteCount}, so making a ${gridDims[[0]]} by ${gridDims[1]} grid`)
    
        //load the first image by itself first to get the image sizes 
        const firstImg = loadImageIntoElement(files[0]);
        firstImg.onload = () => {
            spriteDims = [firstImg.naturalWidth, firstImg.naturalHeight];
            sheetDims = [spriteDims[0] * gridDims[0], spriteDims[1] * gridDims[1]];
            console.log(`Single sprite dims are ${spriteDims[0]} by ${spriteDims[1]}. Total spritesheet dims will be ${sheetDims[0]} by ${sheetDims[1]}`);
        }

        //load the rest of the images
        for (let i = 1; i < spriteCount; i++) {
            loadImageIntoElement(files[i]);
        };
        imgElements[imgElements.length-1].onload = copySpritesToCanvas;
    };
    input.click();
}

const loadImageIntoElement = (url) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(url);
    imgElements.push(img);
    return img;
}

const copySpritesToCanvas = () => {
    const canvas = document.createElement("canvas");
    canvas.width = sheetDims[0];
    canvas.height = sheetDims[1];
    const ctx =  canvas.getContext("2d");
    //document.body.appendChild(document.createElement("br"));
    document.body.appendChild(canvas);
    canvas.style.width = "90%";
    canvas.style.height = "90%";

    for (let y = 0, index = 0; y < gridDims[1]  && index < spriteCount; y++) {
        for (let x = 0; x < gridDims[0]; x++) {
            index = x + y * gridDims[1];
            if (index >= spriteCount) break;
            ctx.drawImage(imgElements[x + y * gridDims[1]], x * spriteDims[0], y * spriteDims[1]);
        }
    }

    const link = document.createElement("a");
    link.download = "spritesheet.png";
    link.href = canvas.toDataURL();
    link.click();
}

const clearData = () => {
    imgElements = [];
    document.querySelector("canvas").remove();
}

let spriteDims, gridDims, sheetDims, spriteCount;
let imgElements = [];

const loadFileButton = document.querySelector("#loadFileButton");
loadFileButton.onclick = loadFiles;

const clearFileButton = document.querySelector("#clearFileButton");
clearFileButton.onclick = clearData;