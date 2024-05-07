import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useState } from "react";
import { useEffect } from "react";

export default function CartScreen({ route, navigation }) {
  const [cartItems, setCart] = useState([...route.params.data]);
  const [caloricText, onChangeCalories] = useState("");
  const [protienText, onChangeProtein] = useState("");
  function foodDisplayer(itemData) {
    return (
      <View style={styles.root}>
        <View style={styles.inner}>
          <Image source={{ uri: itemData.item.url }} style={styles.image} />

          <View style={styles.bottom}>
            <Text style={styles.title}>{itemData.item.ingredient_name}</Text>
          </View>
        </View>
      </View>
    );
  }

  const submitMealData = async () => {
    try {
      const urls = cartItems.map((item) => {
        item.url;
        console.log(item.url);
      });
      const response = await fetch("http://192.168.37.237:5000/create_dish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url_list: urls,
          max_calories: 1000,
          min_protein: 30,
        }),
      });

      const responseData = await response.json();
      console.log("Server response:", responseData);
    } catch (error) {
      console.error("Error uploading image data:", error);
    }
  };

  function createMeal() {
    setCart([]);
    navigation.navigate("IngredientsPage", {
      newCart: cartItems,
    });
    submitMealData().catch((e) => console.log("Error submitting data:", e));
    navigation.navigate("Mealss");
  }

  return (
    <ScrollView>
      <View>
        <Pressable style={styles.createMeal} onPress={createMeal}>
          <Text style={styles.cmText}>Create Meals</Text>
        </Pressable>
        <View style={styles.extras}>
          <Text style={styles.waffle}>Enter your caloric restrictions: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCalories}
            value={caloricText}
          />
          <Text style={styles.waffle}>
            Enter the amount of protein desired:{" "}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeProtein}
            value={protienText}
          />
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={foodDisplayer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  root: {
    margin: 16,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 180,
  },
  inner: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  createMeal: {
    margin: "5%",
    width: "90%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#016b3f",
    justifyContent: "center",
  },
  cmText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginBottom: 12,
    marginTop: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  extras: {
    marginHorizontal: "5%",
  },
  waffle: {
    fontSize: 14,
    fontWeight: "600",
  },
});
