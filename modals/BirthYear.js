import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
//
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//
export default function BirthYear() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Utilisé pour confirmer que vous avez 13 ans ou plus et est requis
              par la loi dans de nombreux pays. HappyCow inclut la publication
              de photos d'avatar personelles, de forums, de messages, de photos
              de plats, de publications de critiques et d'autres informations
              relatives à la gestion d'un profil en ligne. Pas affiché
              publiquement.
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ color: "#533382", fontWeight: "500" }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>
          <Feather name="info" size={20} color="#533382" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    width: widthScreen * 0.8,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 5,
  },

  textStyle: {
    color: "black",
  },
  modalText: {
    marginBottom: 15,
  },
});
