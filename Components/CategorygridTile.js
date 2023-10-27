import { Pressable } from 'react-native'
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native'

// import { useNavigation } from '@react-navigation/native';

function CategorygridTile({ title, color, OnPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    [
                        styles.button,
                        pressed ? styles.buttonpressed : null
                    ]}
                onPress={OnPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default CategorygridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
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
    button: {
        flex: 1,
    },
    buttonpressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})