
import {useState} from "react";

function AddText({appendText}){
    const[text, setText] = useState("");

    const handleSubmit = () => {
        appendText(text);
        setText("");
    };
    const handleChange = (e) => {
        setText(e.target.value);
      };
    
    return(
        <div className="w-full bg-white shadow-lg rounded-2xl p-8">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="This is where you can add to the story"  
                className="w-full h-60 border border-gray-300 rounded-xl p-6 resize-none bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            <br />
            <button className= "button_class" onClick={(handleSubmit)}> Add</button>
        </div>
    );
}
export default function Prompt(){
    const [story, setStory] = useState("");
    const appendText = (newText) => {
        setStory((prev) => prev + " " + newText);
    }
    return(
        <div className = "center_div">
            <div className="p-8 flex justify-center items-center w-full">
                <div className="w-full bg-white shadow-lg rounded-2xl p-8">
                    <textarea 
                    value={story} 
                    readOnly
                    className="w-full h-60 border border-gray-300 rounded-xl p-6 resize-none bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="The story will appear here..."
                    />
                </div>
            </div>

            <AddText appendText={appendText} />
        </div>
    );
}