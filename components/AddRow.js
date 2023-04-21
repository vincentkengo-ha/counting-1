import { useState } from "react";
import { View, TextInput, Keyboard, StyleSheet } from "react-native";

import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a name"
        onChangeText={setName}
      />
      <CountButton
        style={styles.button}
        text="Add"
        submit={() => {
          addNewCountable(name);
          Keyboard.dismiss();
          // no work :(
          setName("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10,
  },
  button: {
    margin: 10,
  },
  textField: {
    margin: 10,
  },
});
