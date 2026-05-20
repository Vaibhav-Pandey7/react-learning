# useCallback is used with js functions not React components
# The Golden Rule of useCallback
  
>If your function uses a `state` variable inside its `body`, that variable `MUST` `go` into the `dependency array`. If it's in the array, React will automatically give you a fresh, new copy of the function exactly when you need it.