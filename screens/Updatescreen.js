import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Updatescreen({ route, navigation }) {
  const [productnm, setProductnm] = useState("");
  const [saleprice, setSaleprice] = useState("");
  const [mrp, setMrp] = useState("");
  const [gst, setGst] = useState("");
  const [inum, setInum] = useState(0);

  const see = async () => {
    try {
      const res = await axios.get(
        `http://192.168.0.105:8001/api/product/${route.params.num}`
      );
      setProductnm(res.data.data.product_name);
      setSaleprice(res.data.data.product_saleprice);
      setMrp(res.data.data.product_mrp);
      setGst(res.data.data.product_gstrate);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    see();
    setInum(route.params.num);
  }, []);

  const updateData = async () => {
    try {
      await axios.put(
        `http://192.168.0.105:8001/api/product/${route.params.num}`,
        {
          productName: productnm,
          productMrp: mrp,
          productSaleprice: saleprice,
          productGstRate: gst,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const update = (e) => {
    e.preventDefault();

    updateData();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>{inum}</Text>
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
      <TouchableOpacity style={styles.btn} onPress={update}>
        <Text style={{ color: "white", fontSize: 18 }}>Update</Text>
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
    marginTop: 50,
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "green",
  },
});

export default Updatescreen;
