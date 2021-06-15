### Introductions
***

### Ask them to talk about a couple of projects they worked on
  - Ask them about a difficult problem they solved
  - Were they using global state? If so 
  - How were they styling components with `React`? Do they have experience with CSS in JS?
  - Did they using Typescript?
  - Did they use any form libraries?
  - Are they using hooks?
  - Did they use a custom webpack, react-create-scripts, or other?
  - Did they use a deisgn library or roll their own?
  - What testing stack did you use? What is their testing philosophy? 
  - Unravel questions about their project and see if you can figure out what they
***

### React Questions to ask

Try to ask these question in the conversation above, but if you have time / need to get a better sense of there ability ask some of these questions.

#### Can you at a very high level describe the Virtual DOM and how it works?
   
   > The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

   > 1) Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
    
  > 2) Then the difference between the previous DOM representation and the new one is calculated.
  
  > 3) Once the calculations are done, the real DOM will be updated with only the things that have actually changed.


#### What are some differences between the Real DOM and the Virtual DOM

  - Real DOM
    - Updates are slow
    - DOM manipulation is very expensive.
    - You can update HTML directly.
    - It causes too much of memory wastage
    - Creates a new DOM if element updates
  - Virtual DOM
    - Updates are fast
    - DOM manipulation is very easy
    - You Can’t directly update HTML
    - There is no memory wastage
    - It updates the JSX if element update

#### What are some Pros / Cons of using hooks?

  - Pros
    - Encapsulates reusable logic
  - Cons
    - Rules of hooks / No copile time errors with React
    - Stale Closures

#### Are there any cases to use Class based components over hooks?

  - If you need to access `getSnapshotBeforeUpdate` and `componentDidCatch` lifecycle methods

#### What are portals and what is a typical use case for a portal?

  - A recommended way to render children into a DOM node outside of the hierarchy of the parent component.

  - Modals, Dialog Boxes, Tooltips, ect.

#### What is a ref and when would one need to use it?

  - Refs provide a way to access DOM nodes or React elements created in the render method.

  - Managing focus, text selection, or media playback.

  - Triggering imperative animations.

  - Integrating with third-party DOM libraries.

### Typescript Questions

If they mention they are familiar with typescript try to work in these questions to determine there level of understanding of Typed Languages.

#### What is a generic?

- generics give you the ability to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

#### What is Discriminated Union?

- Types that have a common, singleton type property the discriminant.
- A type alias that takes the union of those types — the union.
- Type guards on the common property.

#### Links
[What you should know about React Hooks, before using them.](https://nazrhan-mohcine.medium.com/react-hooks-why-what-and-pros-vs-cons-6d3fe18b8a0a)
[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
[front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md#what-is-a-closure-and-howwhy-would-you-use-one)
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
