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
- All six FAQ items contain answer text for complete functionality

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

**Typography Scaling:**
- Answer text is deliberately smaller than question text for visual hierarchy
- Mobile: 0.75rem for answers
- Desktop: 0.875rem for answers
- This creates better readability and matches the reference design

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
       
       // Simply toggle the clicked item only
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

- **Independent Toggle Pattern**: Each FAQ item can be opened or closed independently
- **Two-Step Process**:
  1. Check if clicked item is currently active
  2. Toggle only the clicked item (close if open with `-`, open if closed with `+`)

- **Why This Approach?**
  - `parentElement` gets the `.faq-item` from the clicked button
  - `classList.contains()` checks current state
  - Only affects the clicked item, leaving others unchanged
  - Multiple items can remain open simultaneously
  - Users have full control over which FAQs to view

**Behavior:**
- Clicking a `+` icon opens that specific FAQ without affecting others
- Clicking a `-` icon closes only that specific FAQ
- Multiple FAQs can be open at the same time
- No automatic closing when opening a new item

**Alternative Approaches Considered:**
- Initially considered single-item-open pattern (only one FAQ open at a time)
- Changed to independent toggle based on requirement for better user control
- Could use arrow functions (modern JS) but used traditional functions for compatibility
- Could use `forEach` but used for loops for broader browser support

## Features Implemented

### Responsive Design
- Mobile: Vertical layout, stacked title words
- Desktop: Two-column grid, horizontal title

### Interactive Accordion
- Click to expand/collapse independently
- Smooth animations
- Visual feedback (hover states)
- Icon switching (plus/minus)
- Multiple items can be open simultaneously

### Accessibility Considerations
- Semantic HTML structure
- Button elements for clickable areas
- Clear visual indicators
- Keyboard accessible (buttons are focusable)

### Performance
- Pure CSS animations (GPU accelerated)
- Minimal JavaScript
- No external dependencies except Google Fonts
- Fast load times

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard CSS Grid and Flexbox
- ES5 JavaScript for broader compatibility
- Google Fonts CDN for typography

## AI Assistance Disclosure

### Prompt Given to AI:
"Create an FAQ accordion component with exact colors and fonts. Use pure HTML CSS & JS. It should be mobile responsive. The font is Noto Sans and #b9e7ce is the background color. Make the answer text smaller. On desktop, the FAQ title should be on the left side with questions on the right in a two-column layout. On mobile, the title words should each be on separate lines (Frequently / Asked / Questions). Multiple FAQs should be able to stay open at the same time. Clicking + should only open that item, not close others. Only clicking - should close an item."

### What AI Helped With:
- Initial HTML structure suggestions
- CSS Grid layout implementation for desktop view
- Responsive design media query breakpoints
- SVG icon markup for plus/minus indicators
- Debugging CSS transitions
- Font import syntax from Google Fonts
- Explaining the independent toggle pattern

### What I Did Myself:
- Analyzed the reference images for exact design requirements
- Wrote the JavaScript accordion logic implementation
- Understood and implemented the independent toggle pattern
- Removed the code that closes other items when opening new ones
- Fine-tuned responsive breakpoints
- Adjusted font sizes and spacing to match reference
- Added hover states and transitions
- Structured the project file organization
- Tested across different screen sizes
- Fixed bugs and refined the user experience
- Added answer text to all FAQ items
- Ensured multiple items can be open simultaneously

## How to Use

1. **Setup**: Create three files in the same folder:
   - index.html
   - styles.css
   - script.js

2. **Copy Code**: Copy the respective code into each file

3. **Open**: Open index.html in a web browser

4. **Test**: 
   - Click questions to expand/collapse
   - Open multiple questions at once
   - Verify each item toggles independently
   - Resize browser to test responsiveness
   - Check that title breaks correctly on mobile

## Code Explanation

### HTML Structure
The HTML is organized into three main sections:
1. **Header**: Contains the title and description paragraph
2. **FAQ Container**: Wrapper that holds all FAQ items
3. **FAQ Items**: Individual question-answer pairs with buttons and collapsible content

Each FAQ item has:
- A button containing the question text and both icons
- A div containing the answer that expands/collapses
- CSS classes that control visibility and state

### CSS Approach
The stylesheet uses:
- **Mobile-first design**: Base styles for mobile, enhanced for desktop
- **CSS Grid**: For the two-column desktop layout
- **Flexbox**: For internal alignment within components
- **Transitions**: For smooth expand/collapse animations
- **Class-based state management**: `.active` class controls open/closed state

### JavaScript Logic
The script:
1. Waits for DOM to load
2. Selects all FAQ items
3. Attaches click listeners to each question button
4. Toggles only the clicked item's state
5. Does not interfere with other items' states

## Future Enhancements
- Add ARIA labels for better screen reader support
- Keyboard navigation (arrow keys to move between questions)
- Animation timing customization options
- Theme color variables using CSS custom properties
- Deep linking to specific FAQ items via URL hash
- Search/filter functionality for finding specific questions
- Collapse all / Expand all buttons
- Save state to localStorage to remember open items

## Learning Outcomes
Through this project, I learned:
- Mobile-first responsive design principles
- CSS Grid for complex two-column layouts
- Event delegation in JavaScript
- DOM manipulation techniques
- Cross-browser compatibility considerations
- Importance of semantic HTML for accessibility
- How to structure a front-end project with separate concerns
- Independent state management for multiple interactive elements
- The difference between single-item and multi-item accordion patterns
- How CSS transitions work with max-height property

## Technical Decisions

### Why CSS Grid for Desktop Layout?
CSS Grid provides a clean, two-column layout with minimal code. It allows the header to be on the left and FAQs on the right without complex positioning or floats.

### Why max-height for Accordion Animation?
Using `max-height` with a transition creates a smooth expanding/collapsing effect. While not perfect for extremely long content, it works well for FAQ items and provides better performance than JavaScript-based animations.

### Why Traditional JavaScript (ES5)?
Using `var`, traditional functions, and for loops ensures maximum browser compatibility without requiring transpilation or polyfills.

### Why Independent Toggle Pattern?
The requirement specified that multiple items should stay open when clicking new items. This gives users more control and allows them to compare multiple answers simultaneously.

## Conclusion
This FAQ accordion component demonstrates core web development skills including semantic HTML, modern CSS layout techniques, and vanilla JavaScript DOM manipulation. The project successfully meets all requirements: pixel-perfect design implementation, full responsiveness, smooth interactive functionality, and independent item toggling for enhanced user control.

---

**Project Completed**: December 14 2025  
**Technologies Used**: HTML, CSS, JavaScript  
**Design Pattern**: Mobile-First Responsive Design 