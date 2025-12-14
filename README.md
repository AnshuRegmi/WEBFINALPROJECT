# WEBFINALPROJECT
# FAQ Accordion Component - Documentation

## Project Overview
This project is a fully responsive FAQ (Frequently Asked Questions) accordion component built with pure HTML, CSS, and JavaScript. The design features a clean, modern interface with a mint green background and smooth animations.

## Design Specifications

### Visual Design
- **Font Family**: Noto Sans
- **Background Color**: #b9e7ce (Mint Green)
- **Primary Text Color**: #1A3D5C (Dark Blue)
- **Card Background**: White (#FFFFFF)
- **Border Radius**: 8px for cards
- **Shadow**: Subtle box-shadow for depth

### Layout Structure
- **Mobile View**: Stacked layout with title words on separate lines
- **Desktop View**: Two-column grid layout (Header on left, FAQs on right)
- **Responsive Breakpoint**: 768px

## File Structure
```
project-folder/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
└── script.js           # Interactive accordion functionality
```

## Development Process

### 1. HTML Structure (index.html)
I started by creating a semantic HTML structure with proper accessibility in mind:

- **Container**: Main wrapper for centering content
- **Header Section**: Contains the title and description
  - Title uses `<span class="line">` elements to control line breaks responsively
- **FAQ Container**: Wrapper for all accordion items
- **FAQ Items**: Each question-answer pair is contained in a `.faq-item` div
  - Question button with text and icons (plus/minus SVG)
  - Answer div that expands/collapses

**Key HTML Features:**
- Semantic structure using proper heading hierarchy
- SVG icons for plus/minus indicators
- Class-based styling approach for maintainability
- One FAQ item starts with `active` class (second item) to show default expanded state

### 2. CSS Styling (styles.css)
The styling was built using a mobile-first approach with progressive enhancement for larger screens.

**CSS Architecture:**
1. **Reset & Base Styles**: Universal selector to reset margins/padding
2. **Typography**: Imported Noto Sans font from Google Fonts
3. **Mobile Layout** (default): Vertical stacking with title words on separate lines
4. **Desktop Layout** (768px+): CSS Grid for side-by-side layout
5. **Interactive States**: Hover effects and transitions

**Key CSS Techniques Used:**
- CSS Grid for desktop two-column layout
- Flexbox for internal component alignment
- CSS transitions for smooth animations
- `max-height` transition for accordion expand/collapse effect
- Media queries for responsive design
- `position: sticky` for header in desktop view
- Display toggling for plus/minus icons based on `.active` class

**Responsive Design Logic:**
```css
/* Mobile: Title words stack vertically */
.header h1 .line {
    display: block;
}

/* Desktop: Title words inline */
@media (min-width: 768px) {
    .header h1 .line {
        display: inline;
    }
}
```

### 3. JavaScript Functionality (script.js)
The JavaScript handles the accordion's interactive behavior with vanilla JavaScript (no frameworks).

**Logic Breakdown:**

1. **DOM Ready Event Listener**
```javascript
   document.addEventListener('DOMContentLoaded', function() { ... });
```
   - Ensures all HTML is loaded before executing JavaScript
   - Prevents errors from trying to access elements that don't exist yet

2. **Select All FAQ Items**
```javascript
   var faqItems = document.querySelectorAll('.faq-item');
```
   - Gets all FAQ accordion items from the DOM
   - Returns a NodeList that we can iterate over

3. **Loop Through Each FAQ Item**
```javascript
   for (var i = 0; i < faqItems.length; i++) { ... }
```
   - Traditional for loop to attach click handlers to each item
   - Using var and traditional loops for maximum browser compatibility

4. **Click Event Handler Logic**
```javascript
   question.addEventListener('click', function() {
       var clickedItem = this.parentElement;
       var isActive = clickedItem.classList.contains('active');
       
       // Close all other items first
       var allItems = document.querySelectorAll('.faq-item');
       for (var j = 0; j < allItems.length; j++) {
           if (allItems[j] !== clickedItem) {
               allItems[j].classList.remove('active');
               var answer = allItems[j].querySelector('.faq-answer');
               answer.classList.remove('active');
           }
       }
       
       // Toggle clicked item
       if (isActive) {
           clickedItem.classList.remove('active');
           var ans = clickedItem.querySelector('.faq-answer');
           ans.classList.remove('active');
       } else {
           clickedItem.classList.add('active');
           var ans = clickedItem.querySelector('.faq-answer');
           ans.classList.add('active');
       }
   });
```

**JavaScript Logic Explanation:**

- **Single Item Open Pattern**: Only one FAQ can be open at a time
- **Three-Step Process**:
  1. Check if clicked item is currently active
  2. Close ALL other items (loop through and remove 'active' class)
  3. Toggle the clicked item (close if already open, open if closed)

- **Why This Approach?**
  - `parentElement` gets the `.faq-item` from the clicked button
  - `classList.contains()` checks current state
  - Closing others first creates a cleaner UX
  - Toggle logic prevents multiple items being open

**Alternative Approaches Considered:**
- Could use arrow functions (modern JS) but used traditional functions for compatibility
- Could use `forEach` but used for loops for broader browser support
- Could allow multiple items open, but single-item pattern is cleaner for FAQs

## Features Implemented

### ✅ Responsive Design
- Mobile: Vertical layout, stacked title words
- Desktop: Two-column grid, horizontal title

### ✅ Interactive Accordion
- Click to expand/collapse
- Smooth animations
- Visual feedback (hover states)
- Icon switching (plus/minus)

### ✅ Accessibility Considerations
- Semantic HTML structure
- Button elements for clickable areas
- Clear visual indicators
- Keyboard accessible (buttons are focusable)

### ✅ Performance
- Pure CSS animations (GPU accelerated)
- Minimal JavaScript
- No external dependencies
- Fast load times

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard CSS Grid and Flexbox
- ES5 JavaScript for broader compatibility
- Google Fonts CDN for typography

## AI Assistance Disclosure

### Prompt Given to AI:
"Create an FAQ accordion component with exact colors and fonts. Use pure HTML CSS & JS. It should be mobile responsive. The font is Noto Sans and #b9e7ce is the background color. Make the answer text smaller. On desktop, the FAQ title should be on the left side with questions on the right in a two-column layout. On mobile, the title words should each be on separate lines (Frequently / Asked / Questions)."

### What AI Helped With:
- Initial HTML structure suggestions
- CSS Grid layout implementation for desktop view
- Responsive design media query breakpoints
- SVG icon markup for plus/minus indicators
- Debugging CSS transitions

### What I Did Myself:
- Analyzed the reference images for exact design requirements
- Wrote the JavaScript accordion logic from scratch
- Implemented the single-item-open pattern
- Fine-tuned responsive breakpoints
- Adjusted font sizes and spacing to match reference
- Added hover states and transitions
- Structured the project file organization
- Tested across different screen sizes
- Fixed bugs and refined the user experience

## How to Use

1. **Setup**: Create three files in the same folder:
   - index.html
   - styles.css
   - script.js

2. **Copy Code**: Copy the respective code into each file

3. **Open**: Open index.html in a web browser

4. **Test**: 
   - Click questions to expand/collapse
   - Resize browser to test responsiveness
   - Verify only one item opens at a time

## Future Enhancements
- Add ARIA labels for better screen reader support
- Keyboard navigation (arrow keys)
- Animation timing customization
- Theme color variables (CSS custom properties)
- Deep linking to specific FAQ items
- Search functionality

## Learning Outcomes
Through this project, I learned:
- Mobile-first responsive design principles
- CSS Grid for complex layouts
- Event delegation in JavaScript
- DOM manipulation techniques
- Cross-browser compatibility considerations
- Importance of semantic HTML
- How to structure a front-end project

## Conclusion
This FAQ accordion component demonstrates core web development skills including semantic HTML, modern CSS layout techniques, and vanilla JavaScript DOM manipulation. The project successfully meets all requirements: pixel-perfect design implementation, full responsiveness, and smooth interactive functionality.

---

**Project Completed**: December 14, 2025  
**Technologies Used**: HTML, CSS, JavaScript
**Design Pattern**: Mobile-First Responsive Design