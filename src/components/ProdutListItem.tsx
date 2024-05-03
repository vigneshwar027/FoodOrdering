import Colors from "../constants/Colors";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProp = {
  product: Product;
};

const ProductListItem = ({ product }) => {
  console.log(product);
  return (
    // you dont have mention (tabs) in the href as those that has () are optional to be included
    <Link href = {`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>{product.name} </Text>
      <Text style={styles.price}>${product.price} </Text>
    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 10,
    flex:1,
    maxWidth:'50%'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
  },
});
