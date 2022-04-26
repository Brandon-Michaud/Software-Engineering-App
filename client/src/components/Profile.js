import React from "react";
import './Profile.css'

function Profile({user}) {
    const calcNutrient = (user, index) => {
        let total = 0;
        user.foods.map((value, key) => {
            total += value.foodNutrients[index].value
            return total
        })
        return total
    }

    const calcTotalCalories = (user) => {
        let totalP = 0;
        let totalC = 0;
        let totalF = 0;
        user.foods.map((value, key) => {
            totalP += value.foodNutrients[0].value
            totalF += value.foodNutrients[1].value
            totalC += value.foodNutrients[2].value
            return null
        })
        return (4*totalP + 9*totalF + 4*totalC)
    }

    const calcRecommendedCalories = (user) => {
        let totalCalories = (10 * (user.weight * 0.453592)) + (6.25 * (user.height * 2.54)) - (5 * (user.age / 12));
        if (user.gender === "Male") {
            totalCalories += 5;
        }
        else {
            totalCalories -= 161;
        }
        totalCalories *= user.activity;
        return totalCalories
    }

    if (user == null) {
        return (
            <div className="profile">
                <p className="error">Log in to access this feature</p>
            </div>
        )
    }
    else {
        return (
            <div className="profile">
                <div className="current">
                    <h1>Today's Current Intake</h1>
                    <p className="calories">{Math.round(calcTotalCalories(user)*100)/100}</p>
                    <ul className="macros">
                        <li className="subLabel">&nbsp;</li>
                        <li>{Math.round(calcNutrient(user, 0)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 1)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 2)*100)/100}</li>
                    </ul>
                    <ul className="vitamins">
                        <li className="subLabel">&nbsp;</li>
                        <li>{Math.round(calcNutrient(user, 20)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 28)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 24)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 23)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 36)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 29)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 30)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 31)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 32)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 34)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 33)*100)/100}</li>
                    </ul>
                    <ul className="minerals">
                        <li className="subLabel">&nbsp;</li>
                        <li>{Math.round(calcNutrient(user, 10)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 15)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 14) / 1000 * 100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 12)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 13)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 11)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 16)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 17) * 1000*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 18)*100)/100}</li>
                    </ul>
                </div>
                <div className="labels">
                    <h1>Nutrient (unit)</h1>
                    <p className="calories">Calories (kcal)</p>
                    <ul className="macros">
                        <li className="subLabel">Macronutrients</li>
                        <li>Protein (g)</li>
                        <li>Fat (g)</li>
                        <li>Carbohydrates (g)</li>
                    </ul>
                    <ul className="vitamins">
                        <li className="subLabel">Vitamins</li>
                        <li>A (mcg)</li>
                        <li>C (mg)</li>
                        <li>D (mcg)</li>
                        <li>E (mg)</li>
                        <li>K (mcg)</li>
                        <li>Thiamine (mg)</li>
                        <li>Riboflavin (mg)</li>
                        <li>Niacin (mg)</li>
                        <li>B-6 (mg)</li>
                        <li>B-12 (mcg)</li>
                        <li>Folate (mcg)</li>
                    </ul>
                    <ul className="minerals">
                        <li className="subLabel">Minerals</li>
                        <li>Calcium (mg)</li>
                        <li>Sodium (mg)</li>
                        <li>Potassium (g)</li>
                        <li>Magnesium (mg)</li>
                        <li>Phosphorous (mg)</li>
                        <li>Iron (mg)</li>
                        <li>Zinc (mg)</li>
                        <li>Copper (mg)</li>
                        <li>Selenium (mcg)</li>
                    </ul>
                </div>
                <div className="recommended">
                    <h1>Recommended Daily Intake</h1>
                    <p className="calories">{Math.round(calcRecommendedCalories(user)*100)/100}</p>
                    <ul className="macros">
                        <li className="subLabel">&nbsp;</li>
                        <li>{Math.round(calcNutrient(user, 0)*100/100)}</li>
                        <li>{Math.round(calcNutrient(user, 1)*100)/100}</li>
                        <li>{Math.round(calcNutrient(user, 2)*100)/100}</li>
                    </ul>
                    <ul className="vitamins">
                        <li className="subLabel">&nbsp;</li>
                        <li>{user.gender === "Male" ? 900 : 700}</li>
                        <li>{user.gender === "Male" ? 90 : 75}</li>
                        <li>{user.gender === "Male" ? 15 : 15}</li>
                        <li>{user.gender === "Male" ? 15 : 15}</li>
                        <li>{user.gender === "Male" ? 120 : 90}</li>
                        <li>{user.gender === "Male" ? 1.2 : 1.1}</li>
                        <li>{user.gender === "Male" ? 1.3 : 1.1}</li>
                        <li>{user.gender === "Male" ? 16 : 14}</li>
                        <li>{user.gender === "Male" ? 1.3 : 1.3}</li>
                        <li>{user.gender === "Male" ? 2.4 : 2.4}</li>
                        <li>{user.gender === "Male" ? 400 : 400}</li>
                    </ul>
                    <ul className="minerals">
                        <li className="subLabel">&nbsp;</li>
                        <li>{user.gender === "Male" ? 1000 : 1000}</li>
                        <li>{user.gender === "Male" ? 2300 : 2300}</li>
                        <li>{user.gender === "Male" ? 4.7 : 4.7}</li>
                        <li>{user.gender === "Male" ? 420 : 320}</li>
                        <li>{user.gender === "Male" ? 700 : 700}</li>
                        <li>{user.gender === "Male" ? 8 : 18}</li>
                        <li>{user.gender === "Male" ? 11 : 8}</li>
                        <li>{user.gender === "Male" ? 900 : 900}</li>
                        <li>{user.gender === "Male" ? 55 : 55}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile