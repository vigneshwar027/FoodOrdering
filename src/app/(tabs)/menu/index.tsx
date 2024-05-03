import { FlatList, View } from "react-native";
import products from "../../../../assets/data/products";
import ProductListItem from "../../../components/ProdutListItem";

export default function MenuScreen() {
  return (

    <FlatList
    data={products}
    renderItem={({item})=> <ProductListItem product={item} /> }
    numColumns ={2}
    columnWrapperStyle= {{gap:10}}
    contentContainerStyle = {{gap:10, padding:10}}
    />
  );
}
