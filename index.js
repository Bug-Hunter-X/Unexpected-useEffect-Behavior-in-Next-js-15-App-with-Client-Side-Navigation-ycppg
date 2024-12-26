```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [count,setCount] = useState(0);
    useEffect(()=>{        
        console.log("About page rendered");
        //Clean up function 
        return ()=>{}
    }, []);
    return(
        <div>
            <h1>About Page</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}
```
By removing the `count` dependency from the useEffect hook, we prevent re-renders when the count changes, making sure it only runs once on mount.