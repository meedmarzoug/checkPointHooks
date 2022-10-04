import React from 'react'

function AddFavourites({addfavourite}) {
    return (
        <div>
            <div className="overlay flex align-center justify-center " onClick={(movie) => addfavourite({movie})}>
                    Add to Favourites
                </div>
        </div>
    )
}

export default AddFavourites
