import React from "react";
import "./NavBar.css"
import StarRatingComponent from "react-star-rating-component";
function NavBar({search,setSearch,rate, setRate}) {
   const handleChange= (event) => setSearch(event.target.value)
    
   return (
        <div className="NavBar">
            
            <div className="h">
                
            <div className="Search">
                <div className="field">
                    <label className="label"> Search Movie</label>
                    <input
                        className="input"
                        value={search}
                        //Controle de saisie de la valeur
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div> 
                <div className="rate">
                <StarRatingComponent
                                name="rate"
                                starCount={5}
                                value={rate}
                                onStarClick={(nextValue, prevValue) =>
                                    setRate(nextValue, prevValue)
                                }
                            />
                </div>
           

            </div>
           
        </div>
            </div>
            
    );
}

export default NavBar;
