fetch('https://localhost:8000/login', {
    method: 'POST', // или 'PUT'

    body: {
        username: 'ivan',
        password: '1234',
    }, // data может быть `string`, `Blob`, `FormData` или `ArrayBuffer`
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Успешно:', data);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
