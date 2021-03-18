//this page is for card component where we code how to organise data of recipe api
import React ,{useState} from 'react';
const Recipe=(props)=>{
  const[show,setShow]=useState(false);
  const showingrediant=()=>setShow(!show);
return(
<>
<div className="col">
<div className="card">
  <img src={props.image} className="card-img-tops" alt="..." id="img"/>
  <div className="card-body">
    <h5 className="card-title">{props.label}</h5>
    <p className="card-text">{props.calories} Calories</p>
    <a href="#" className="btn btn-info w-30 m-3 " onClick={showingrediant}>Ingredients</a>
    <a href={props.mainrecipe} className="btn btn-success w-40 m-3 ">Recipe</a>
  {show?<h6>{props.ingrediant}</h6> :null}
  </div>
</div>
</div>
</>
);
}
export default Recipe;
