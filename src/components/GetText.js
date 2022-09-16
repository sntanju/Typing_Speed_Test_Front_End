import React from "react";
import { useDispatch } from "react-redux";
import { setText } from "../redux/state/TTCslice";
 
const GetText = (props) => { 

    let fetchedText = props.text;
    let userText = '';
    const text = props.text.split('');
    //const userInput = props.userInput.split('');
    const dispatch = useDispatch();

    return (
        <div className="border rounded p-3 mb-4 ">
            {
                text.map( (s,i) => {
                    let color;
                    if(i < props.userInput.length){
                        if( s === props.userInput[i]) {
                            color = "#dfffa0";
                        }
                        else{
                            color ="#fcbea4";
                        }                
                    }
                    userText = props.userInput;
                    let temp = () => {
                        dispatch(setText({fetchedText, userText}));
                    }
                    temp();
                    return <span key={i} style={{backgroundColor: color}}>{s}</span>
                } )
            }
        </div>
    )
}
 
export default GetText;