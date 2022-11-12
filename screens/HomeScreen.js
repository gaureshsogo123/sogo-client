import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageEditor,
} from "react-native";
import { TextInput } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [info, setInfo] = useState([]);
  const [ids, setIds] = useState(null);

  const getdata = async () => {
    try {
      const res = await axios.get("http://192.168.0.105:8001/api/product");
      setInfo(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handlePress = () => {
    navigation.navigate("product");
  };

  const edit = (id) => {
    setIds(id);
    navigation.navigate("update", {
      num: ids,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {info.map((val, i) => {
          return (
            <View style={styles.productcontainer} key={i}>
              <Text style={{ position: "absolute", top: 8, left: 10 }}>
                {val.product_name}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  color: "gray",
                  top: 25,
                  left: 10,
                }}
              >
                Sale Price : Rs. {val.product_saleprice}
              </Text>
              <TouchableOpacity onPress={() => edit(val.id)}>
                <View style={{ position: "absolute", right: 20, top: 20 }}>
                  <AntDesign name="edit" size={30} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <Text>{ids}</Text>
      <TouchableOpacity style={styles.product} onPress={handlePress}>
        <Text style={{ color: "white", fontSize: 18 }}>Add New Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  product: {
    width: "100%",
    height: "auto",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
  },
  productcontainer: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    position: "relative",
    borderRadius: 8,
  },
});
