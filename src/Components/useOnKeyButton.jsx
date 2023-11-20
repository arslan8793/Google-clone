import { useEffect } from "react";

export const useOnKeyButton=(callback,targetKey)=>{

useEffect(()=>{
    const KeyPressHandler=(event)=>{
        if(event.key===targetKey){
            callback()
        }
    }
    window.addEventListener('keydown',KeyPressHandler)
    return()=>{
        window.removeEventListener('keydown',KeyPressHandler)
    }
},[callback,targetKey])

}