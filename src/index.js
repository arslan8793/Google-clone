import{createRoot} from "react-dom/client"
import React from "react"
import App from "./App"
import { StateProvider } from "./Components/StateProvider"
import reducer,{ initialState } from "./Components/Reducer"


createRoot( document.getElementById("root")).render
(
       <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
   
)


