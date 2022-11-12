import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AnimatedInput from "react-native-animated-input";

function NewProduct({ navigation }) {
  const [productnm, setProductnm] = useState("");
  const [saleprice, setSaleprice] = useState("");
  const [mrp, setMrp] = useState("");
  const [gst, setGst] = useState("");

  const see = async () => {
    try {
      await axios.post("http://192.168.0.105:8001/api/product", {
        productName: productnm,
        productMrp: mrp,
        productSaleprice: saleprice,
        productGstRate: gst,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const press = () => {
    see();
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productnm}
        onChangeText={(val) => setProductnm(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Saleprice"
        value={saleprice}
        onChangeText={(val) => setSaleprice(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mrp"
        value={mrp}
        onChangeText={(val) => setMrp(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gst"
        value={gst}
        onChangeText={(val) => setGst(val)}
      />
      <TouchableOpacity style={styles.btn} onPress={press}>
        <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  btn: {
    marginTop: 40,
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "green",
  },
});

export default NewProduct;
