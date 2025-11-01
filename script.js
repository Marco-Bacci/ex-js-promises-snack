// 1) Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(resp => resp.json())
      .then(obj => resolve(obj.title))
      .catch(error => reject(error));
  });
}

getPostTitle(1)
  .then((title) => console.log("Titolo:", title))
  .catch((error) => console.error(error));

