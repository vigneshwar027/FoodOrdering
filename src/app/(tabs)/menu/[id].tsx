import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";

const sizes = ["s", "m", "l", "xl"];

const ProductDetailScren = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((prod) => prod.id.toString() === id);
  return (
    /* Setting title can be done either from actual file itself or from layout's file */
    // Stack Screen is used to set the title of the screen
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Product is ${product?.name}`,
        }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text>Select a Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <View style={styles.size}>
            <Text style={styles.sizeText} key={size}>{size}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.price}>The price is {product?.price}</Text>
    </View>
  );
};

export default ProductDetailScren;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    // marginTop:10,
    padding: 20,
  },
  sizes: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  size: {
    
    backgroundColor:'gainsboro',
    width:50,
    aspectRatio:1,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
  sizeText: {
    fontSize:20,
    fontWeight:'500',
  },
});
