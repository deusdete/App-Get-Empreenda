import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import EmprestimoScrenn from "../screens/EmprestimoScreen";
import EstudarScrenn from "../screens/EstudarScreen";
import PouparScrenn from "../screens/PouparScreen";
import SonhosScrenn from "../screens/SonhosScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabPouparParamList,
  TabEstudarParamList,
  TabSonhosParamList,
  TabEmprestimoParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Poupar"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Poupar"
        component={TabPouparNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-wallet" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Estudar"
        component={TabEstudarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-book" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Sonhos"
        component={TabSonhosNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Emprestimo"
        component={TabEsprestimoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-cash" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabPoupar = createStackNavigator<TabPouparParamList>();

function TabPouparNavigator() {
  return (
    <TabPoupar.Navigator>
      <TabPoupar.Screen
        name="PouparScreen"
        component={PouparScrenn}
        options={{ headerTitle: "Get Poupa" }}
      />
    </TabPoupar.Navigator>
  );
}

const TabEstudar = createStackNavigator<TabEstudarParamList>();

function TabEstudarNavigator() {
  return (
    <TabEstudar.Navigator>
      <TabEstudar.Screen
        name="EstudarScreen"
        component={EstudarScrenn}
        options={{ headerTitle: "Get Educa" }}
      />
    </TabEstudar.Navigator>
  );
}

const TabSonhos = createStackNavigator<TabSonhosParamList>();

function TabSonhosNavigator() {
  return (
    <TabSonhos.Navigator>
      <TabSonhos.Screen
        name="SonhosScreen"
        component={SonhosScrenn}
        options={{ headerTitle: "Get Empreenda" }}
      />
    </TabSonhos.Navigator>
  );
}

const TabEsprestimo = createStackNavigator<TabEmprestimoParamList>();

function TabEsprestimoNavigator() {
  return (
    <TabEsprestimo.Navigator>
      <TabEsprestimo.Screen
        name="EmprestimoScreen"
        component={EmprestimoScrenn}
        options={{ headerTitle: "Empréstimo" }}
      />
    </TabEsprestimo.Navigator>
  );
}
