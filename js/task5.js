console.log('Задание5 :');

document.querySelector('#request').addEventListener('click', async() => {
    let countPage = Number(document.querySelector('#countPage').value);
    let limit = Number(document.querySelector('#limit').value);

    let correctCountPage = rangeChecker(countPage, 1, 10);
    let correctLimit = rangeChecker(limit, 1, 10);

    if ((!correctCountPage & !correctLimit)) {
        document.querySelector('#result5').innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return;
    } else if (!correctCountPage) {
        document.querySelector('#result5').innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return
    } else if (!correctLimit) {
        document.querySelector('#result5').innerHTML = 'Лимит вне диапазона от 1 до 10';
        return
    }

    let imgs = await useRequestImages(countPage, limit);

    let div = document.querySelector('#result5');

    displayResult(imgs, div, 0);
})


const useRequestImages = (page, limit) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            saveArraySessionStorage('imgs', json);
            console.log('saved');
            return json;
        })
        .catch(() => { console.log('error') });
}


// сохрянятся только при перезагрузке страницы, чтобы сохранить навсегда:
// localStorage.setItem(key, JSON.stringify(array));
function saveArraySessionStorage(key, array) {
    sessionStorage.setItem(key, JSON.stringify(array));
}


window.addEventListener('load', () => {
    let imgs = JSON.parse(sessionStorage.getItem('imgs'));

    if (imgs) {
        let div = document.querySelector('#result5');

        displayResult(imgs, div, 0);
    }
})