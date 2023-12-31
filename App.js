import {
  View, StyleSheet
} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "./components/pages/homePage"
import ApiPage from "./components/pages/apiPage"
import VerbPage from "./components/pages/verbPage"
import ArticlesPage from "./components/pages/articlesPage"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottonTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Home Page"
        }}
        name='homePage'
        component={HomePage} />
      <Tab.Screen
        options={{
          title: "Verb Quiz"
        }}
        name='verbPage'
        component={VerbPage} />
      <Tab.Screen
        options={{
          title: "Der/Die/Das"
        }}
        name='articlesPage'
        component={ArticlesPage} />
      <Tab.Screen
        options={{
          title: "Api Call"
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