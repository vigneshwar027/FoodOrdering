import { Stack } from "expo-router";

export default function MenuStack() {
    return <Stack>
        <Stack.Screen name="menu" />
        <Stack.Screen name = 'index' options={{title:"Sometitle from Layout"}}/>
        </Stack>
}