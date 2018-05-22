//Set's the copyright date
document.querySelector(
  '.copyright_Date',
).textContent = new Date().getUTCFullYear();

// const current = document.querySelector('.current');

// //Images Node List
// const images = document.querySelectorAll('.projects');

// const normalSrc = 'images/header[95].png';

// const opacity = 0.7;

// const changeImageSource = (e) => {
//   current.src = e.target.src;
//   if (e.target.classList.contains('.projects')) {
//     console.log(e.target.src);
//   }

//   e.target.style.opacity = opacity;
// };

// const changeImageToNormal = () => {
//   current.src = normalSrc;
// };

// // On mouse over change the img src
// images.forEach((img) => img.addEventListener('mouseover', changeImageSource));

// // on mouse out return the img src to normal
// images.forEach((img) => img.addEventListener('mouseout', changeImageToNormal));
