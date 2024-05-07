import { FlatList, Button, View, StyleSheet, Text, Pressable } from "react-native";
//import { MEALS } from "../data/data";
import Ingredient from "../components/Ingredient";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";

export default function IngredientsPage({ route, navigation }) {
  const [cartData, setCartData] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('http://192.168.37.237:3000/ingredients');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const parsedIngredients = Object.keys(data).map(key => ({
          id: key,
          name: data[key].ingredient_name,
          ...data[key]
        }));
        setIngredients(parsedIngredients);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        Alert.alert('Error', 'Failed to load ingredients');
      }
    };
    fetchIngredients();
  }, []);

  function showIngerdient(itemData) {
    function pressHandler() {
      navigation.navigate("Details", {
        data: itemData.item,
      });
    }
    
    function adder(){
      console.log(cartData);
      setCartData((prev) => [itemData.item, ...prev])
    }

    return (
      <Ingredient
        onPress={pressHandler}
        data={itemData.item}
        addData={adder}
      />
    );
  }

  function cartOpener() {
    navigation.navigate("Cart", {
      data: cartData,
    });
  }

  return (
    <View style={{marginBottom: 120}}>
      <View style={styles.cartHolder}>
        <Pressable onPress={cartOpener}>
          <Ionicons name="cart" size={36} color="green" />
        </Pressable>
        <Text style={styles.cartNum}>{cartData.length}</Text>
      </View>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id}
        renderItem={showIngerdient}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartHolder: {
    margin: "5%",
    width: "90%",
    backgroundColor: "white",
    height: 60,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cartNum: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
