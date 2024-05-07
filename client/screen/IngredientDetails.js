import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLayoutEffect } from "react";
import Nutri from "../components/Nutri";

export default function IngredientDetails({ route, navigation }) {
  const data = route.params.data;
  const ingData = {
    ingredient_name: "water",
    serving_size: 500,
    macronutrients: { calories: 0, fat: 0, carbohydrates: 0, protein: 0 },
    micronutrients: { sodium: 10, calcium: 40 },
    url: "https://firebasestorage.googleapis.com/v0/b/foodframe-422304.appspot.com/o/images%2F2024-05-04T14%3A01%3A42.223Z.jpg?alt=media&token=5e8c6d52-8ea5-4090-a361-d90a68266599",
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.ingredient_name,
    });
  }, [ingData, navigation]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: data.url }} />
      <View style={styles.foodData}>
        <View>
          <Text style={styles.subtitle}>Macronutrients</Text>
          <Nutri {...data.macronutrients} />
        </View>

        <View>
          <Text style={styles.subtitle}>Micronutrients</Text>
          <View style={styles.nutrientRoot}>
            {Object.keys(data.micronutrients).map((key) => {
              return (
                <View style={styles.holder}>
                  <Text style={styles.tit}>{key}</Text>
                  <Text>{data.micronutrients[key]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "150%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "white",
  },
  textPositioner: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  foodData: {
    position: "absolute",
    top: 280,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    paddingTop: 15,
    paddingHorizontal: 15,
    flex: 1,
    height: 1000,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nutrientRoot: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  tit: {
    fontSize: 15,
    fontWeight: "bold",
  },
  holder: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
