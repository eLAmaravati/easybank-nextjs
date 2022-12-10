# Frontend Mentor - Easybank landing page solution

![](public/desktop-preview.jpg)

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

- Solution URL: [Github Repository](https://github.com/eLAmaravati/easybank-nextjs)
- Live Site URL: [Live site URL](https://easybank-nextjs-ochre.vercel.app/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Issue & Approach](#issue--approach)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

Sebetulnya, tantangan dari Frontend Mentor adalah membuat *landing page* menggunakan `HTML`, `CSS`, dan `JavaScript`. Tetapi, karena saya sedang mengasah JavaScript *framework*, jadi saya *slicing* menggunakan `NextJS`. 

**Mulai:** 10 Desember 2022
**Selesai:** 11 Desember 2022

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JS library
- Semantic HTML5 markup
- Bootstrap - for grid system
- Saas - For styles
- Flexbox

### Issue & Approach

Beberapa kendala yang saya hadapi dan pendekatan yang saya lakukan.

#### 1. Header

**Kendala**

Tantangan terbesar adalah membuat *header* dengan `background-image` dan ada gambar yang *overlapping* di atasnya.

Ini gambar *background* yang diberikan:

![Desktop background](public/bg-intro-desktop.svg)

### What I learned

Ini pertama kalinya saya menggunakan `NextJS` untuk `real project`. 


```css
.header {
  overflow: hidden;
  position: relative;
  background: $lightGray url('/bg-desktop.webp') no-repeat top 0 right 0;
  background-size: contain;
  height: 600px;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development



### Useful resources

- [Playlist NextJS - Prawito Hudoro](https://www.youtube.com/playlist?list=PLU4DS8KR-LJ3-zouYHHknPq1G5VTB8PRf) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Langit Amaravati](https://www.langitamaravati.com)
- Frontend Mentor - [@elamaravati](https://www.frontendmentor.io/profile/elamaravati)
- Twitter - [@elamaravati](https://www.twitter.com/elamaravati)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

