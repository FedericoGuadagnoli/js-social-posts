const posts = [
    {
        id : '1',
        author : 'Phil Mangione',
        pictureAuthor : 'https://unsplash.it/300/300?image=15',
        date : '12-25-2021',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://unsplash.it/600/300?image=33',
        like : 80
    },
    {
        id : '2',
        author : 'Vince Mugnaio',
        pictureAuthor : 'https://unsplash.it/300/300?image=25',
        date : '07-13-2021',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://unsplash.it/600/300?image=171',
        like : 33
    },
    {
        id : '3',
        author : 'Max Payne',
        pictureAuthor : 'https://unsplash.it/300/300?image=35',
        date : '12-25-2021',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://unsplash.it/600/300?image=191',
        like : 65
    },
    {
        id : '4',
        author : 'Jack Lupino',
        pictureAuthor : 'https://unsplash.it/300/300?image=45',
        date : '02-27-2020',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'https://unsplash.it/600/300?image=11',
        like : 233
    }
];

//Prendo gli elementi di interesse dal DOM
const container = document.getElementById('container');

//^FUNZIONI
const createCard = post => {
  const {author,pictureAuthor,date,text,image,id,like} = post;

  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString();   
  };
  
   const card = 
   `<div class="post">
   <div class="post__header">
     <div class="post-meta">
       <div class="post-meta__icon">
         <img class="profile-pic" src="${pictureAuthor}" alt="profile_${author}" />
       </div>
       <div class="post-meta__data">
         <div class="post-meta__author">${author}</div>
         <div class="post-meta__time">${formatDate(date)}</div>
       </div>
     </div>
   </div>
   <div class="post__text">
     ${text}
   </div>
   <div class="post__image">
     <img src="${image}" alt="" />
   </div>
   <div class="post__footer">
     <div class="likes js-likes">
       <div class="likes__cta">
         <button class="like-button js-like-button" href="#" data-postid="${id}">
           <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
           <span class="like-button__label">Mi Piace</span>
         </button>
       </div>
       <div class="likes__counter">Piace a <b id="like-counter-${id}" class="js-likes-counter">${like}</b> persone</div>
     </div>
   </div>
 </div>`
 return card;
};


//Creo una variabile di appoggio per creare il post

let cards = '';
// Ciclo gli elementi dell'array da inserire nel post
posts.forEach((post) => {
  cards += createCard(post);  
});

  container.innerHTML = cards;


      //Prendo gli elementi di interesse appena creati con js dal DOM
      const likeButtons = document.querySelectorAll('.like-button');
 
      // Aggiungo un evento al click per ogni bottone
     likeButtons.forEach((likeButton) => {
      likeButton.addEventListener('click', () =>{

        // Aggiungo e tolgo la classe liked
        likeButton.classList.toggle('like-button--liked');

        // recupero il post-id e il counter dei like
        const postId = likeButton.dataset.postid;
        const likeCounters = document.getElementById(`like-counter-${postId}`);
          
        // Incremento e decremento il bottone
          let likes = parseInt(likeCounters.innerText);
          const isLiked = likeButton.classList.contains('like-button--liked');
          likeCounters.innerText = isLiked ? ++likes : --likes;
      });
     }); 



