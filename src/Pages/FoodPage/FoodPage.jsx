import Foodcard from '../../components/FoodCard/FoodCard';
import './FoodPage.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Foodpage() {
    const [foods, setFood] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [uniqueCountries, setUniqueCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const filteredData = foods.filter((obj) =>
        obj.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
                const data = await response.json();
                const countries = data.meals.map(meal => meal.strArea);
                const countriesList = Array.from(new Set(countries));
                setUniqueCountries(countriesList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false)

        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
                if (selectedCountry !== '') {
                    url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setFood(data.meals ? data.meals : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false)
        };
        fetchData();
    }, [selectedCountry]);

    const renderProducts = () => {
        return filteredData.map((product) => (
            <NavLink to={`/food/${product.idMeal}`} style={{ textDecoration: "none" }} >
                {
            <Foodcard
                product={product}
                key={product.idMeal}
            />
                }
            </NavLink>
        ));
    };


    return (
        

        <>
            <div className="main-container">
                <label>🔍</label>
                <input
                    type="text"
                    placeholder="Search your food"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />

                <select style={{ height: "30px", marginLeft: "10px" }} value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} >
                    <option value="">All Cuisines</option>
                    {uniqueCountries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>

                <div className="food-container">
                    {isLoading?(<p>Loading...</p>):(renderProducts())}
                </div>
            </div>
        </>
    )
}

export default Foodpage