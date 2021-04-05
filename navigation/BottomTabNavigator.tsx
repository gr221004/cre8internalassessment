import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Read from '../screens/Read';
import Write from '../screens/Write';
import Creation from '../screens/Creation';
import { BottomTabParamList } from '../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName;
            let unFocusColor = "gray";

            if (route.name === "Write") {
                return (
                    iconName =
                    <Feather name="pen-tool" size={30}
                        color={focused ? "rosybrown" : unFocusColor}
                    />
                    
                );
            } else if (route.name === "Read") {
                return (
                    iconName =
                    <Feather name="book-open" size={30}
                        color={focused ? "#d2996c" : unFocusColor}
                    />
                );

            } else if (route.name === "Creation") {
                return (
                    iconName =
                    <FontAwesome5 name="lightbulb" size={30}
                        color={focused ? "goldenrod" : unFocusColor}
                    />
                );

            }
        },
    })}
    tabBarOptions={{
        tabStyle: {
            borderColor: 'lightgray',
            borderWidth: 1,
        },
        labelStyle: {
            textTransform: "none",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: 15,
            margin: 20,
            padding: 15,
        },
        activeTintColor: "cadetblue",
        inactiveTintColor: "gray",
        style: {
            justifyContent: "space-evenly",
            backgroundColor: "white",
        }
    }
    }
>

    <Tab.Screen name="Read" component={Read} />
    <Tab.Screen name="Write" component={Write} />
    <Tab.Screen name="Creation" component={Creation} />

    </Tab.Navigator>
  );
}
