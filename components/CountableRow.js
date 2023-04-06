import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CountButton } from "./CountButton";
import { CountablesContext } from "../providers/CountablesProvider";
import { CommonStyles } from "../styles/CommonStyles";

export const CountableRow = ({ countable, index }) => {
  const countablesContext = useContext(CountablesContext);

  return (
    <View style={CommonStyles.row}>
      <View style={styles.nameColumn}>
        <Text style={CommonStyles.textItem}>{countable.name}</Text>
        <Text style={CommonStyles.textItem}>{countable.count}</Text>
      </View>
      <View style={styles.buttonColumn}>
        <CountButton
          text="+"
          submit={() => {
            countablesContext.changeCounts(1, index);
          }}
        />
        <CountButton
          text="-"
          submit={() => {
            countablesContext.changeCounts(-1, index);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameColumn: {
    flex: 0.8,
    alignItems: "center",
  },
  buttonColumn: {
    flex: 0.2,
  },
});
