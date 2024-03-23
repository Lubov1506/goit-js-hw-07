const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
gallery.classList.add('container');

// const createImgs = images => {
//   const gallery = document.querySelector('.gallery');
//   images.forEach(item => {
//     let li = document.createElement('li');
//     let img = document.createElement('img');
//     li.classList.add('gallery-item');
//     img.setAttribute('src', item.url);
//     img.setAttribute('alt', item.alt);

//     li.appendChild(img);
//     gallery.append(li);
//   });
// };

// or
const createImgs = images => {
  const fragment = document.createDocumentFragment();
  const imgs = images.forEach(item => {
    let li = document.createElement('li');
    li.classList.add('gallery-item');
    li.insertAdjacentHTML(
      'beforeend',
      `
    <img src="${item.url}" alt="${item.alt}" />
    `
    );
    fragment.append(li);
  });
  gallery.append(fragment);
  return imgs;
};

createImgs(images);
