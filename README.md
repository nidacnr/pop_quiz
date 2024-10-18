
# Pop Quiz Project

A fun interactive quiz application that allows users to test their knowledge through multiple-choice questions fetched from an external API. 

## Criteria Fulfillment

### HTML

**Basic HTML structure is present.**
   - **File:** `index.html`
   - **Code Line:** 1-9
   - its established taht this is a HTML5 document, title, stylesheet is linked etc.

**HTML structure with clear content differentiation (headings, paragraphs, lists).**
   - **File:** `index.html`
   - **Code Line:** 11-13
   - Clear headings and paragraphs are used.

**Use of forms, links, and media.**
   - **File:** `index.html`
   - **Code Line:** 14, 21
   - media is added online 14. on line 21 a form is utilized to collect user input, allowing for interactive features in the quiz.

**Tables are effectively used.**
   - **File:** `index.html`
   - **Code Line:** 31
   - A table is implemented to display previous scores.

**Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**
   - **File:** `index.html`
   - **Code Line:**11-29
   - Semantic elements like `<header>`, `<main>`, and `<section>` are used.


### CSS

**Basic CSS styling (colors, fonts).**
   - **File:** `styles.css`
   - **Code Line:**1-7
   - Basic styles are applied: background color, font, text-align font color...

**Use of classes and IDs to style specific elements.**
   - **File:** `styles.css`
   - **Code Line:** 53, 58
    Classes are used to apply specific styles to elements.

**Implementation of responsive design elements.**
   - **File:** `styles.css`
   - **Code Line:** 130
   - Media queries are utilized so the application is responsive and adjusts to different screen sizes.

**Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid).**
   - **File:** `styles.css`
   - **Code Line:** 61
   - Flexbox is used.

**Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.**
   - **File:** `styles.css`
   - **Code Line:** 77
   - button styling improves user interaction and visual appeal.

---

### JavaScript Basics

**Simple interactions (like alerts on button click).**
   - **File:** `script.js`
   - **Code Line:** 54
   - Alert is used to ensure username input is validated.

**Multiple event listeners and basic DOM manipulations.**
   - **File:** `script.js`
   - **Code Line:** 47, 99, 140
   - Event listeners handle form submission, refresh button clicks and mouse movement.

**Use of arrays, objects, and functions.**
   - **File:** `script.js`
   - **Code Line:** 8, 11, 23, 36, 67, 85, 92, 103, 112, 136
   - Arrays and functions are used to manage quiz questions and user interactions.

**Advanced logic, looping through data, and dynamic DOM updates.**
   - **File:** `script.js`
   - **Code Line:** 25
   - questions.forEach((question, index) => {}); demonstrates advanced logic displaying questions dynamically.


### Asynchronous Operations

**Use of timers.**
   - **File:** `script.js`
   - **Code Line:** 130
    -Timer for spark effect

1. **Successful implementation of an AJAX call or Fetch.**
   - **File:** `script.js`
   - **Code Line:** 13
   - fetch API is used to get quiz questions asynchronously.

2. **Data from the asynchronous call is displayed on the webpage.**
   - **File:** `script.js`
   - **Code Line:** 17
   - fetched data is displayed in the quiz interface.

3. **Error handling is implemented (for failed API calls, etc.).**
   - **File:** `script.js`
   - **Code Line:** 14
   - Error handling