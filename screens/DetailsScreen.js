import { useEffect, useContext } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';

import MealDetails from '../Components/MealDetails';
import Subtitle from '../Components/MealDetail/Subtitle';
import List from '../Components/MealDetail/List';
import IconButton from '../Components/IconButton';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

import { FavoritesContext } from '../store/context/favorites-context'

export default function DetailsScreen({ route, navigation }) {

    const FavoriteMealCtx = useContext(FavoritesContext);

    // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    // const dispatch = useDispatch();


    const MealId = route.params.MealId;

    const selectedMeal = MEALS.find((meal) => meal.id === MealId)

    const MealisFavorite = FavoriteMealCtx.ids.includes(MealId)

    // const MealisFavorite = favoriteMealIds.includes(MealId)

    function changeFavoriteStatus() {
        if (MealisFavorite) {

            // dispatch(removeFavorite({ id: MealId }));
            FavoriteMealCtx.removeFavorite(MealId)

        } else {

            // dispatch(addFavorite({ id: MealId }));
            FavoriteMealCtx.addFavorite(MealId)

        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={MealisFavorite ? 'star' : 'star-outline'}
                    color='white'
                    onPress={changeFavoriteStatus}
                />
            }
        });
    }, [navigation, changeFavoriteStatus])


    return (
        <ScrollView style={style.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={style.image} />
            <Text style={style.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={style.textStyle}
            />
            <View style={style.listOuterContainer}>
                <View style={style.listContainer}>

                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />

                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    textStyle: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
})