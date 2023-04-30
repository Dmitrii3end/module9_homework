console.log('Задание4 :');

document.querySelector('#submit').addEventListener('click', async() => {
    let widthImage = Number(document.querySelector('#width').value);
    let heightImage = Number(document.querySelector('#height').value);

    let correctSize = rangeChecker(widthImage, 100, 300) & rangeChecker(heightImage, 100, 300);

    if (correctSize) {
        const img = await useRequestImage(widthImage, heightImage);

        displayImage(img);
    }
})


const useRequestImage = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            return response;
        })
        .catch(() => { console.log('error') });
}


function displayImage(apiData) {
    document.querySelector('#result4').innerHTML = `<img src="${apiData.url}"/>`;
}