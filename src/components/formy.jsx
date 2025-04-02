import React, { useState }  from "react";
import Btrecipe from "./buttonrecipe";
import Secondrecipe from "./secondpage";
import { getRecipeFromMistral } from "./ai.js";


export default function Formy(){ 
   const[value,setValue]=React.useState([]);       //this sets the state and the statefunction to change the value of state. 
   const submithandle=(formdata)=>{                //this is the logic function that runs when the form is submitted. and action method of form automatically gets the FormData api which can be used to get the data from the user interface.
        const item=formdata.get('ingredient');     //this gets the current value passed from input in the form.
        setValue(prevstate=>[...prevstate,item])   //this adds the item submitted from the form in the  previous existing array.
    }


    const [recipeshown,setrecipe]=React.useState(false);
    const[recipe,setrecipetext]=React.useState('');
    
    async function clicked(){                             //this is a function that sets the recipeshown to true to display the recipe
    setrecipe(prevstate=>true)
    const recipes=await getRecipeFromMistral(value);
    setrecipetext(recipes);
   }
    
    function clicking(){                            //this is a function that sets the recipeshown to false to remove the recipe page.
    setrecipe(prevstate=>false)}
    
    
    return(
        <main>
            <form action={submithandle} className="addform">                   {/*  in this code the action sets on submithandle makes things easier for accessing the data,*/} 
                <input  name='ingredient' type="text" placeholder="eg:organic" aria-label="enter a food" required/>
                <button>Add ingredient</button>
            </form>
            
            {value.length>0 && <section className="recipecontainer1">
                
            <div className="justone">
               <p className="firstp">Ingredients on hand:</p>
                <ul>
                {value.map((item,index)=><li key={index}>{item}</li>)}         {/*it maps through each item in an array to display the list of item*/}   
                </ul> 
            </div>
                
                <Btrecipe  recipeshown={recipeshown} vv={value} cc={clicked} clicking={clicking}/>  {/* this is the buttonrecipe component*/}
            </section>}
            
            <Secondrecipe rs={recipeshown} rt={recipe}  />                                                        {/*this is the recipe page component*/}
           
        </main>
    )
}
