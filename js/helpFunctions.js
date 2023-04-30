const rangeChecker = (num, min, max) => min <= num & num <= max;


function displayResult(apiData, elem, author) {
    let cards = '';

    if (author) {
        apiData.forEach(item => {
            const cardBlock = `
            <div class="card">
              <img
                src="${item.download_url}"
                class="card-image"
              />
              <p>${item.author}</p>
            </div>
          `;
            cards = cards + cardBlock;
        });
    } else {
        apiData.forEach(item => {
            const cardBlock = `
            <div class="card">
              <img
                src="${item.download_url}"
                class="card-image"
              />
            </div>
          `;
            cards = cards + cardBlock;
        });
    }

    elem.innerHTML = cards;
}