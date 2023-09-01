import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import React, { useState } from "react";
// import {Text, TextInput, View} from 'react-native';
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigate } from "react-router-dom";

export default function Dashboard({ navigation: { navigate } }) {
  const [text, setText] = useState("");

 function selectedItem(person)
 {
  console.log("called")
  navigate("ListAItem",{navigate:navigate})
 }

  const persons = [
    {
      id: "1",
      name: "Earnest Green",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "2",
      name: "Winston Orn",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "3",
      name: "Carlton Collins",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "4",
      name: "Malcolm Labadie",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "5",
      name: "Michelle Dare",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "6",
      name: "Carlton Zieme",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "7",
      name: "Jessie Dickinson",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "8",
      name: "Julian Gulgowski",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "9",
      name: "Ellen Veum",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "10",
      name: "Lorena Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },

    {
      id: "11",
      name: "Carlton Zieme",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "12",
      name: "Jessie Dickinson",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "13",
      name: "Julian Gulgowski",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
    {
      id: "14",
      name: "Ellen Veum",
      description:
        "Lorem ipsum dolor sit amet,  adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Paid",
    },
    {
      id: "15",
      name: "Lorena Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: require("../assets/food.png"),
      views: 5,
      price: "Free",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View>
            {persons.map((person) => {
              return (
                <TouchableOpacity style={styles.item} key={person.id} onPress={()=>selectedItem(person)} >
                  <View>
                    <Image style={styles.image} source={person.image} />
                  </View>
                  <View style={styles.productDesc}>
                    <Text style={{ fontWeight: 700 }}> {person.name}</Text>
                    <View style={styles.desc}>
                      <View style={styles.views}>
                        <Image
                          source={require("../assets/view.png")}
                          style={{ width: 20, height: 20 }}
                        />
                        <Text> {person.views}</Text>
                      </View>
                      <View style={styles.quantity}>
                        <Text style={{ fontSize: 10, color: "grey" }}>
                          Quantity :
                        </Text>
                        <Text> {person.views}</Text>
                      </View>
                      <View style={styles.pricee}>
                        <Text style={person.price == "Free" ? styles.Free : ""}>
                          {person.price == "Free" ? person.price : ""}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    width: "100%",
  },
  desc: {
    flexDirection: "row",
    verticalAlign: "middle",
    marginTop: 15,
    width: "100%",
    justifyContent: "space-around",
  },
  item: {
    shadowColor: "grey",
    shadowOffset: { width: -10, height: 4 },
    shadowOpacity: 0.5,
    paddingLeft: 5,
    elevation: 10,
    paddingVertical: 10,
    paddingRight: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fefefe",
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  productDesc: {
    flexShrink: 1,
    // textAlignVertical:"top",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  views: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "15%",
    justifyContent: "space-between",
    marginRight: 10,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "20%",
    justifyContent: "space-between",
    marginRight: 20,
  },
  Paid: {
    padding: 5,
    backgroundColor: "#FFFF8A",
    borderRadius: 10,
    width: 50,
    paddingHorizontal: 10,
  },
  Free: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#57D657",
    width: 50,
    paddingHorizontal: 10,
  },
  pricee: {
    textAlignVertical: "center",

    //  marginTop:15,

    // backgroundColor:"red"
  },
});
