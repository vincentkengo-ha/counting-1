import { useState } from "react";
import { View, TextInput } from "react-native";

import { CountButton } from "./CountButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput placeholder="Enter a name" onChangeText={setName} />
      <CountButton
        text="Add"
        submit={() => {
          addNewCountable(name);
        }}
      />
    </View>
  );
};
