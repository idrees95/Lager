// me/lager/App.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from "./components/Warehouse";
import Pick from "./components/Pick.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
// const routeIcons = {
//   "Lager": "stock",
//   "Plock": "pick",
// };

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <NavigationContainer>
        {/* <Tab.Navigator>
          <Tab.Screen style={styles.itemslist} name="Lager" component={Stock} />
          <Tab.Screen name="Plock" component={Pick} />
        </Tab.Navigator> */}
        <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Lager") {
          iconName = "home";
      } else if (route.name === "Plock")  {
          iconName = "list";
      } else {
          iconName = "alert";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Lager" component={Stock} />
  <Tab.Screen name="Plock" component={Pick} />
</Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemslist: {
    backgroundColor: "yellow",
    overflow: "scroll"
  },
});