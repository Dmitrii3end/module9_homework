console.log('Задание3 :');


function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result, resultNode, true);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};


const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');


btnNode.addEventListener('click', () => {
    let countImage = Number(document.querySelector('#countImage').value);
    let correctCount = rangeChecker(countImage, 1, 10);

    if (correctCount) {
        useRequest(`https://picsum.photos/v2/list/?limit=${countImage}`, displayResult);
    }
})