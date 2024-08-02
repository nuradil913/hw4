fetch('https://api.quotable.io/random')
    .then(response => {
        if (response.status === 200) {
            console.log('status', response.status);
            return response.json();
        } else {
            throw new Error('Failed to fetch quote');
        }
    })
    .then(data => {
        console.log('quote:', data.content);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    document.getElementById('btn').addEventListener('click', () => {
        fetch('https://api.quotable.io/random')
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error('Failed to fetch quote');
            }
          })
          .then(data => {
            document.getElementById('p').innerText = data.content;
            console.log('Quote:', data.content);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      });