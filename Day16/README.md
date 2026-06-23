# why call api's Globally not locally?
>a website can have multiple pages, if we fetch a user's github info at one page we have to write the fetch function there and update the global state and since there is nt certainity of the web page ordering as one use goes like 1->2->3->4 page while other can go like 1->3->1->2 and so on and if we have to load the github user's info in multiple pages we would have to repeat the function in all the pages ,voilating the **DRY PRINCIPLE** of programming so instead  call globally

## createAsyncThunk  
>used to create an Action creator 
>Does it happen instantly in the browser? ➡️ Standard reducers.

>Do you have to await it? ➡️ createAsyncThunk+extraReducers.  

# Flow
1. The Broadcaster (createAsyncThunk)
>What it does: It handles your API call.
>
>The Magic: It automatically generates three exact "passwords" (.pending, .fulfilled, .rejected) and glues them directly to its variable name.
>
2. The Trigger (dispatch)
>What it does: You must manually fire it inside your React component to start the process (e.g., inside useEffect).
>
>The Magic: Once fired, Redux takes over and automatically blasts those exact passwords to your entire app as the API call starts, succeeds, or >fails.
>
3. The Vault (extraReducers)
>What it does: It is the secure listener inside your slice that updates your actual state.
>
>The Magic (Why no placeholders?): It requires an exact password match to let data in. You cannot use a random placeholder name because it >doesn't hold the password. You must use fecthdata.pending because it contains the exact secret string (e.g., "Coin/fetch/pending") needed to >unlock the state.