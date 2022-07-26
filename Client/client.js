
const options = {
  method: 'GET', // выбор метода запроса
  mode: 'cors', // режим работы запроса
  headers: { // дополнительные заголовки для запроса
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin: *',

  },
  //body: 'body', // тело запроса
  // и тд
}

//fetch('https://jsonplaceholder.typicode.com/users', options) // удаленный ресурс работает
fetch( 'http://127.0.0.1:8000/heroes', options) // локальный ресурс
  .then((response) => { return response.json(); })
  .then((data) => { console.log(data); })
  .catch(() => { console.log('error') });


