import { View, Text, StyleSheet } from 'react-native'

export default function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignitems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12,
        fontWeight: '400',
    }
})