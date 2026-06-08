### ⏳ The React Render Cycle: Sync vs. Async Architecture

> When integrating external APIs (like the GitHub API) into a React application, managing the main thread is critical to prevent the UI from freezing or rendering empty data. 

#### ⚡ Synchronous Operations (The Main Thread)
* **Purpose:** Instantaneous, blocking execution. 
* **React Tools:** The `return()` statement (painting the UI), `useContext`, and `useMemo`.
* **Architectural Rule:** `useMemo` is strictly for caching heavy, synchronous math operations. Placing asynchronous network requests (`fetch`) inside synchronous hooks will result in unfulfilled Promises and `undefined` data crashing the component.

#### 🌐 Asynchronous Operations (The Background Workers)
* **Purpose:** Non-blocking operations that take time (Network requests, timers, data streams).
* **React Tools:** `useEffect` (triggering the background task) combined with `useState` (storing the completed data).
* **The Industry-Standard API Pattern:**
    1.  **Sync Render 1:** React instantly paints the UI skeleton (showing a Loading state).
    2.  **Async Fetch:** `useEffect` offloads the `fetch()` request to the background.
    3.  **State Update:** The data arrives, and `setUserData` triggers the React alarm bell.
    4.  **Sync Render 2:** React repaints the exact component with the live API data.

### link used-https://api.github.com/users?since=6000per_page=20

### 🎣 Custom Hooks & Architecture (Separation of Concerns)

Custom Hooks are specialized JavaScript functions that allow us to extract component logic into reusable, modular files. 

#### 🧠 Core Concepts Mastered
* **The `use` Prefix:** Utilizing React's naming convention to allow standard functions to consume core hooks like `useState`, `useEffect`, and `useContext` without violating the Rules of Hooks.
* **Separation of Concerns:** Decoupling complex state management and side effects (like API fetching) from the visual UI components. 
* **Reusability & Scaling:** Creating standalone logic blocks (e.g., `useFetch`, `useTheme`) that can be imported across the entire Single Page Application, completely eliminating code duplication.
* **Cleaner Components:** Keeping standard components "dumb" and focused purely on rendering UI elements based on the data provided by the custom hook.