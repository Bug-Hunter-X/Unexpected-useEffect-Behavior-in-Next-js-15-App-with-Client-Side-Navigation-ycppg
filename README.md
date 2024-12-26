# Unexpected useEffect Behavior in Next.js 15 App

This repository demonstrates an unexpected behavior in a Next.js 15 application involving the `useEffect` hook and client-side navigation.  The `useEffect` hook within the About page runs multiple times unexpectedly, both on initial page load and when navigating to the About page from the Home page.

## Bug Description

The issue occurs when navigating between the Home and About pages. The `useEffect` hook in the About page, intended to log a message on render, executes more than once, which is undesirable.  This can lead to performance issues and unexpected side effects.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between the Home and About pages.
5. Observe the console logs in your browser's developer tools.  You'll notice that the "About page rendered" message logs multiple times.

## Potential Causes and Solutions
The root cause is likely related to the way Next.js 15 handles client-side navigation and component re-rendering.  Solutions might involve optimizing the `useEffect` hook's dependencies or using a different approach for managing state and side effects.  Further investigation is needed to identify the exact cause and a conclusive solution.