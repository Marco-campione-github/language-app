import {
  View, StyleSheet
} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "./src/components/pages/homePage"
import ApiPage from "./src/components/pages/apiPage"
import VerbPage from "./src/components/pages/verbPage"
import ArticlesPage from "./src/components/pages/articlesPage"
import TEXTS from "./src/constants/texts"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottonTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: TEXTS.HomePage
        }}
        name='homePage'
        component={HomePage} />
      <Tab.Screen
        options={{
          title: TEXTS.VerbPage
        }}
        name='verbPage'
        component={VerbPage} />
      <Tab.Screen
        options={{
          title: TEXTS.ArticlesPage
        }}
        name='articlesPage'
        component={ArticlesPage} />
      <Tab.Screen
        options={{
          title: TEXTS.ApiPage
        }}
        name='apiPage'
        component={ApiPage} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='bottomTabs'
            component={BottonTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})