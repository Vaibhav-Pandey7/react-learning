# useCallback is used with js functions not React components
# The Golden Rule of useCallback
  
>If your function uses a `state` variable inside its `body`, that variable `MUST` `go` into the `dependency array`. If it's in the array, React will automatically give you a fresh, new copy of the function exactly when you need it.

# Always handle edge case if user enter large number as we are using for loop and js is single threaded

# When you write const money = useRef(0);, React does not give you the number #.Instead, React gives you a JavaScript Object that acts like a permanent box. That box has exactly one property inside of it called current.So, in your computer's memory, money actually looks like this:
```
{ current: 0 }
```