import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import Nutri from "../components/Nutri";
import List from "../components/List";
import { MEALS } from "../data/data";
import Meal from "../components/Meal";

export default function MealDetailsScreen({ route, navigation }) {
  const selectedMeal = route.params.data;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal, navigation]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.foodData}>
        <View>
          <Text style={styles.subtitle}>Ingredients</Text>
          <List data={selectedMeal.ingredients} />
        </View>
        
        <View>
          <Text style={styles.subtitle}>Instructions</Text>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "white",
  },
  foodData: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 15,
    flex: 1,
    paddingBottom: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
