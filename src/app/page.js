'use client';
import Prompt from './homecomp/prompt';
import '../app/page.css';
import './globals.css';

function App() {
  
    return;;
}
  
export default function Home() {
    return (
        <div> 
            <div id = "heading_div" className="text-white p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">Welcome to the Story Builder</h1>
                <h1 id="heading_title">Continue This Story</h1>
            </div>
            <App />
            <Prompt />
        </div>
    );
  }
   
 