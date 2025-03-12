import { useEffect } from "react";

export function useKey(KEY, action){

    useEffect(() => {
        function callback(event) {
          if (event.code === KEY) action();
        }
    
        document.addEventListener("keydown", callback);
    
        return () => {
          document.removeEventListener("keydown", callback);
        }
      }, [KEY, action]);

      
}