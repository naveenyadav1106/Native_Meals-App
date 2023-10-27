import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"

import CategorygridTile from '../Components/CategorygridTile'

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemdata) {

        function pressHandler() {
            navigation.navigate("MealsOverView", {
                categoryId: itemdata.item.id,
            });
        }

        return (
            <CategorygridTile
                title={itemdata.item.title}
                color={itemdata.item.color}
                OnPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;