import PropTypes from "prop-types";
import './FoodCard.css'

function Foodcard({ product }) {
    return (
        <div class="food-card">
            <img src={product.strMealThumb} alt="Food Image" />
            <div class="food-details">
                <h2 class="food-name">{product.strMeal}</h2>
                {/* <p class="food-description">{product.strInstructions}</p> */}
                <p className="food-area">{product.strArea}</p>
            </div>
        </div>
    )
}

Foodcard.PropTypes = {
    product: PropTypes.object
}

export default Foodcard