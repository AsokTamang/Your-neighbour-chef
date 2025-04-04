export default function Btrecipe(props){
    return (
     <>
     {props.vv.length>4 && 
         (<div  className="recipecontainer2">
         
          <div className="justtwo">   
          <h2>Ready for recipe?</h2>   
          <p>Genrate a recipe from your ingredients</p> 
          </div>
          
          <button className="btn1" onClick={props.cc}>Get a recipe</button>
         {props.recipeshown && <button className="btn2" onClick={props.clicking}>Exit a recipe page</button>}  
         </div>)}
         </>)
 }