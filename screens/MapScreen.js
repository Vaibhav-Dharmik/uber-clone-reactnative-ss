import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>Here is the map stuff........</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        
      </View>
    </View>
  );
}
