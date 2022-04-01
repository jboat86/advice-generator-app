# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-

### Screenshot

Desktop solution (images/advice-gen-desktop.png)
Mobile solution (images/advice-gen-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to create API calls using the fetch() method in Javascript:

```js
onst showAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
```

I also got comfortable with using SCSS by creating my own color amd typography-based variables and adding to the main scss file:

```scss
.card-container p {
  margin-bottom: 2rem;
  color: $light-Cyan;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued development

Due to becoming comfortable with using CSS, I would like to experiment with more advanced SCSS feaures such as mixins, and continue to develop my javascript skills.

### Useful resources

- [Sass documentation](https://sass-lang.com/) - This helped me for understand how to create and use variables in SCSS. I really liked this pattern and will use it going forward.

- [Head First-Learn to Code] - This is an amazing book which helped me understand how API's work. I now understand request must be made to an API where it would fetch the data of your choice (in this case quotes) and generate a response and send it back to your code.

## Author

- Frontend Mentor - [@jboat86](https://www.frontendmentor.io/profile/jboat86)
- linkdn - [Jennifer Boateng ](https://www.linkedin.com/in/jennifer-boateng-79016279/)

## Acknowledgments

I would like acknowledge tsbsankara (youtube) in demonstrating how an API request is made in action!
