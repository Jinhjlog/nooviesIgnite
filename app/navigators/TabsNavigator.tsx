import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen } from "app/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "app/theme"
import { MovieScreen } from "app/screens/MovieScreen"

export type TabsNavigatorParamList = {
  Demo: undefined
  name: string
}

const Tab = createBottomTabNavigator<TabsNavigatorParamList>()
export const TabsNavigator = () => {
  return (
    // jinhj : screenOptions >> 모든 스크린에 적용 옵션
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarActiveTintColor: colors.palette.accent500,
      }}
    >
      <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="film-outline" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Demo2"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="tv" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Demo3"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search-outline" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
