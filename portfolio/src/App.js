import { Header } from "./header.js"; 
import { LeftBar } from "./leftBar.js";

import { RightBar } from "./rightBar.js";


export const App =()=>{
    return (
        <div className="root-containor">
            <Header />
            <div className="body-container">
                <LeftBar />
                <RightBar />
            </div>
        </div>
    )
}