import { useEffect } from "react";

export function useConsoleLog(dependency: any) {
    useEffect(() => {
        console.log(dependency)
    }, [dependency]);
}