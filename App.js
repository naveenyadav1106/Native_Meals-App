import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsViewScreen from './screens/MealsViewScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavouriteScreen from './screens/FavouriteScreen';

import FavoritesContextProvider from './store/context/favorites-context';

import { Provider } from 'react-redux';
import { store } from './store/redux/store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => {
            <Ionicons name='list' color={color} size={size} />
          },
        }}
      />
      <Drawer.Screen
        name='Favourites'
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            <Ionicons name='star' color={color} size={size} />
          },
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#341401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name='MealsOverView' component={MealsViewScreen} />
            <Stack.Screen name='MealDetails' component={DetailsScreen}
              // options={{headerRight: () => {return <Button title='Tap me!' />}}} 
              options={{
                title: 'About The Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </Provider> */}
      </FavoritesContextProvider >
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
