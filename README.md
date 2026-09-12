# Dev Stack

A pick-your-stack landing page for developers. Browse frontend, backend,
database, language, styling, and DevOps technologies, add the ones you
want to a "Your Stack" panel, and build up your ideal toolkit.

## Description

Dev Stack lets a developer explore a curated set of technologies as cards
(icon, description, category, difficulty, rating) and collect the ones
they're interested in into a running "Your Stack" list. Each technology
can only be added once, the stack updates live as items are added or
removed, and every action — add, duplicate attempt, remove, remove all —
is confirmed with a toast notification.

## Tech Stack

- React 19 (Vite)
- Tailwind CSS v4
- react-toastify
- Local JSON as the data source

## Features

1. **Live "Your Stack" builder** — add technologies from the grid, see them
   appear instantly in the sidebar with icon, name, and category, and
   remove one at a time or clear the whole stack at once.
2. **Duplicate protection** — a technology can only be in the stack once;
   trying to add it again shows a warning toast instead of a second entry,
   and its card button is disabled and reads "✓ Added to Stack".
3. **Fully responsive layout** — a 3-column card grid on desktop collapses
   to 2 columns on tablet and 1 on mobile, with a dedicated mobile navbar
   (hamburger, centered logo, auth buttons) and a single shared gradient
   theme (orange → pink → violet) driving the brand name, hero heading,
   and primary buttons from one CSS token.

## Running locally

```bash
npm install
npm run dev
```

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. It's used because it makes describing what a component
should render much more readable than calling `React.createElement()` by
hand — you can see the structure of the UI right next to the logic that
drives it, and it compiles down to regular JavaScript at build time.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent — they're read-only
from the component's own point of view, like arguments to a function.
State is data a component manages internally and can change over time
(for example, with `useState`). Props flow down and configure a
component; state lives inside a component and drives its own re-renders.

**3. What does the useState hook do, and where did you use it in this
project?**
`useState` lets a function component hold a piece of data that can change
and re-renders the component whenever that data updates. In this project
it's used for `technologies` (the fetched list), `isLoading` (the loading
flag), and `stack` (the list of technologies the user has added).

**4. What does the useEffect hook do, and why did you need it to load the
JSON data?**
`useEffect` runs side effects — code that reaches outside the component,
like fetching data — after the component renders. Fetching is
asynchronous and isn't something that should happen during render itself,
so `useEffect` is used to kick off the `fetch('/technologies.json')` call
once when `App` first mounts, then store the result in state.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the `key` to tell items in a list apart between renders, so it
knows which ones were added, removed, or reordered instead of re-creating
every DOM node from scratch. Without a stable, unique key, React can mix
up items and cause bugs or wasted re-renders — here each technology's
`id` is used as the key.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. In `YourStack.jsx`,
the component checks `stack.length === 0` — if true it renders "Your
stack is empty," otherwise it renders the list of added technologies.

**7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?**
A parent passes data down to a child as props, e.g.
`<TechCard tech={tech} isAdded={isAdded} onAdd={onAdd} />`. To send
something back up, the parent passes a function down as a prop (like
`onAdd`), and the child calls that function — here `TechCard` calls
`onAdd(tech)` when its button is clicked, which runs `handleAdd` back in
`App` and updates the parent's state.
