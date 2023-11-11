const requestURL = '../data/members.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const members = jsonObject['members'];
    const cards = document.querySelector('.cards');

    members.forEach(member => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let pimg = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        pimg.setAttribute('src', prophet.imageurl);
        pimg.setAttribute('alt', `Date of Birth: ${prophet.birthdate}`);
        pimg.setAttribute('loading','lazy');
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(pimg);
        cards.append(card);
    });
  });