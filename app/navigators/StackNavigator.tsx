import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen } from "app/screens"

export type StackNavigatorParamList = {
  Demo: undefined
}

const Stack = createNativeStackNavigator<StackNavigatorParamList>()
export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Demo" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}
