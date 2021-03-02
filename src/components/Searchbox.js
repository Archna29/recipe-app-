import React,{useState,useEffect} from 'react';
import Recipe from './Card';
import axios from 'axios';

import RestaurantIcon from '@material-ui/icons/Restaurant';
let iconStyles = {
    fontSize: '65px',
  };
function Search() {
    const[ing ,setIng]=useState("chicken");
    const [dish, setDish] = useState([]);
    const[alert,setAlert]=useState("");
    const appid = "ef997c3b";
    const YOUR_APP_KEY = " f49e913db3ab7c0764ad9fe6575213a2	";
 // Code to load the recipes when page is first loaded
    useEffect(() => {
        Show();
    }, []);
    //end 
    
    // Code when search button will clicked
    const getrecipe=()=>{
    Show();
    }
    //end
    
    //code to store the data stored in textfield
    const geting=(e)=>{
        setIng(e.target.value);
    }
    // code to get the data from api
    const Show = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${ing}&app_id=${appid}&app_key=${YOUR_APP_KEY}`);
        setDish(response.data.hits);
        console.log(response.data.hits);
    };
    return (
        <>
            <div>
            <div className="heading">
         <h1 className="display-1 text-white text-center "> <RestaurantIcon className="material-icons" style={iconStyles}>home</RestaurantIcon>Food Receipes</h1>
            </div>
            <form> 
            <div className="row m-4 ">
      <div className="col-md-7">
  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Search by ingredient" onChange={geting} />
   </div>
 <div className="col-md-3" id="cont">
  <button type="button" className="btn btn-danger  m-4" onClick={getrecipe} >Search</button>
  </div>
    </div> 
   </form>       
                </div>
                         <div className="row row-cols-1 row-cols-md-3 g-4 m-3" id="contai">  
              {/* this function will map the recipe component for the every element dish array */}
                {dish.map((item,ind) => (
                    <Recipe
                      key={ind}
                        label={item.recipe.label}
                        calories={item.recipe.calories}
        dietLabels={item.recipe.dietLabels}
                image={item.recipe.image}
                mainrecipe={item.recipe.url}
                ingrediant={ 
                     <ul className="list-group list-group-flush">
      {item.recipe.ingredientLines.map((sub)=>
       <li className="list-group-item text-Secondary">
    {sub}
      </li>
  )}
</ul> }
                 />
                )
                )}
                </div>
        </>
    );
}
export default Search;
