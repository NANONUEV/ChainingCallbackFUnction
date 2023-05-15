function getData(callback) {
  const url = 'https://api.chucknorris.io/jokes/random';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Joke data retrieved:', data);
      callback(data);
    })
    .catch(error => console.error('Error retrieving joke data:', error));
}

function manipulateData(data, callback) {
  const joke = data.value;
  const manipulatedData = { joke };
  console.log('Joke data manipulated:', manipulatedData);
  callback(manipulatedData);
}

function displayData(data) {
  console.log('Joke data displayed:', data.joke);
}

getData((data) => {
  manipulateData(data, (manipulatedData) => {
    displayData(manipulatedData);
  });
});
