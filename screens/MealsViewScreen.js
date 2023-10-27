import { MEALS, CATEGORIES } from '../data/dummy-data'

import { useEffect } from 'react';
import MealsList from '../Components/MealsList/MealsList';

export default function MealsViewScreen({ route, navigation }) {

    const catId = route.params.categoryId;

    const DisplayedMeals = MEALS.filter((mealitem) => {
        return mealitem.categoryIds.indexOf(catId) >= 0;
    })

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        })

    }, [catId, navigation])

    return <MealsList items={DisplayedMeals} />
}

