const images = document.getElementsByTagName("img");

for (let i = images.length - 1; i >= 0; i--) {
    const image = images[i];
    if (image.alt){
        const text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text,image);
    }
}