# why call api's Globally not locally?
>a website can have multiple pages, if we fetch a user's github info at one page we have to write the fetch function there and update the global state and since there is nt certainity of the web page ordering as one use goes like 1->2->3->4 page while other can go like 1->3->1->2 and so on and if we have to load the github user's info in multiple pages we would have to repeat the function in all the pages ,voilating the **DRY PRINCIPLE** of programming so instead  call globally

## createAsyncThunk  
>used to create an Action creator 
>Does it happen instantly in the browser? ➡️ Standard reducers.

>Do you have to await it? ➡️ createAsyncThunk+extraReducers.