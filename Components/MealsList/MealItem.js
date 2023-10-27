import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform
} from 'react-native'

import MealDetails from '../MealDetails';

import { useNavigation } from '@react-navigation/native';

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function triggerNavigation() {
        navigation.navigate('MealDetails', {
            MealId: id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonpressed : null}
                onPress={triggerNavigation}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}> {title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable >
        </View >
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        // overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        //IOS/////////////////////
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        /////////////////////////
    },
    buttonpressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
})