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


//Creo una variabile di appoggio per creare il post
let card = '';

// Ciclo gli elementi dell'array da inserire nel post
posts.forEach((post, i) => {
    card += `
    <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${post.pictureAuthor}" alt="profile_${i}" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${post.author}</div>
              <div class="post-meta__time">${post.date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
          ${post.text}
        </div>
        <div class="post__image">
          <img src="${post.image}" alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" data-postid="${i}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-${i}" class="js-likes-counter">${post.like}</b> persone</div>
          </div>
        </div>
      </div>`
      container.innerHTML = card;
      
    });
      //Prendo gli elementi di interesse appena creati con js dal DOM
      const likeButtons = document.querySelectorAll('.like-button');
      const likeCounters = document.querySelectorAll('.js-likes-counter');
      
     likeButtons.forEach((likeButton, i) => {
      likeButton.addEventListener('click', () =>{
        likeButton.classList.toggle('like-button--liked');
        likeCounters.forEach((likeCounter, i) => {
          likeButton.classList.contains('like-button--liked') ? posts[i].like += + 1 : posts[i].like += - 1;
          likeCounter.innerHTML = posts[i].like;
          console.log(posts[i].like);

          
        });
      });
     }); 



