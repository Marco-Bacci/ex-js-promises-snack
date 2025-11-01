// 1) Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// function getPostTitle(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((resp) => resp.json())
//       .then((obj) => resolve(obj.title))
//       .catch((error) => reject(error));
//   });
// }

// getPostTitle(1)
//   .then((title) => console.log("Titolo:", title))
//   .catch((error) => console.error(error));

//   🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((resp) => resp.json())
      .then((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((resp) => resp.json())
          .then((user) => resolve({ ...post, user }));
      })
      .catch(reject);
  });
}

getPost(1)
  .then((post) => console.log("Post:", post))
  .catch((error) => console.error(error));

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

// function lanciaDado() {
//   return new Promise((resolve, reject) => {
//     console.log("Lanciando il dado...");
//     setTimeout(() => {
//       let lancio = Math.random() > 0.2;
//       if (lancio) {
//         const numero = Math.floor(Math.random() * 6) + 1;
//         resolve(numero);
//       } else {
//         reject("dado incastrato");
//       }
//     }, 3000);
//   });
// }

// lanciaDado()
//   .then((num) => console.log("il numero uscito è:", num))
//   .catch((error) => console.error(error));
