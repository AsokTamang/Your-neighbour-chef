import ReactMarkdown from 'react-markdown'   //this is a react package which provides us a html page from an api. 
export default function Secondrecipe(props){
    return(
        <>
    {props.rs && 
         
         (<section className='rmarkdown'>
            <h2>Chef Recommends:</h2>
            <ReactMarkdown>{props.rt}</ReactMarkdown></section>)}     {/*this ReactMarkdown automatically manages the response from api.*/}
    
    </>)}   