import { useContext } from 'react'
import MealsList from '../Components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import { StyleSheet, View, Text } from 'react-native';

function FavouriteScreen() {

    const FavoriteMealCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => FavoriteMealCtx.ids.includes(meal.id))

    if (favoriteMeals.length === 0) {
        return <View style={style.rootContainer}>
            <Text style={style.text}>You have no Favorite Meals Yet</Text>
        </View>
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavouriteScreen;

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    }
})