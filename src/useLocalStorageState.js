import { useEffect, useState } from "react";

export function useLocalStorageState(initState, key) {
    const [value, setValue] = useState(function() {
        const storageValue = localStorage.getItem(key);
        return storageValue ? JSON.parse(storageValue) : initState;
      });

      useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);

        return [value, setValue];
}