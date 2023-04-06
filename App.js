import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AddRow } from "./components/AddRow";
import { CountableRow } from "./components/CountableRow";
import {
  CountablesContext,
  CountablesProvider,
} from "./providers/CountablesProvider";

export default function App() {
  // https://medium.com/@nickyang0501/keyboardavoidingview-not-working-properly-c413c0a200d4
  return (
    <CountablesProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <CountablesContext.Consumer>
            {(countablesContext) => {
              return (
                <>
                  <ScrollView>
                    {countablesContext.countables.map((countable, index) => (
                      <CountableRow
                        countable={countable}
                        key={countable.name}
                        index={index}
                      />
                    ))}
                    <View style={{ flex: 1 }} />
                  </ScrollView>
                  <AddRow />
                </>
              );
            }}
          </CountablesContext.Consumer>
          <StatusBar style="auto" />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </CountablesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});
