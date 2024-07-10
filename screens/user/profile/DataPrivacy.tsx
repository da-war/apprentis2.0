import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import DropDown from "../../../components/DropDown";
import AppButton from "../../../components/AppButton";

const data = [
  {
    id: 1,
    label: "Everyone",
    name: "Everyone",
  },
  {
    id: 2,
    label: "People I follow",
    name: "People I follow",
  },
  {
    id: 3,
    label: "No one",
    name: "No one",
  },
];

interface Props {
  navigation: any;
}

const DataPrivacy: React.FC<Props> = ({ navigation }) => {
  const [messagesPrivacy, setMessagesPrivacy] = React.useState(null);
  return (
    <View style={GlobalStyles.parentContainer}>
      <AppHeader title="Data Privacy" onPressIcon={() => navigation.goBack()} />
      <View style={GlobalStyles.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container1}>
            <Text style={GlobalStyles.h6}>Messages</Text>
            <Text style={styles.subText}>
              Choose who can send you direct message
            </Text>
            <DropDown
              data={data}
              onSelectItem={(item) => setMessagesPrivacy(item)}
              placeholder="Select who can send you messages"
              selectedItem={messagesPrivacy}
            />
          </View>
          <View style={styles.container1}>
            <Text style={GlobalStyles.h6}>Profile</Text>
            <Text style={styles.subText}>
              Choose who can send you direct message
            </Text>
            <DropDown
              data={data}
              onSelectItem={(item) => setMessagesPrivacy(item)}
              placeholder="Select who can send you messages"
              selectedItem={messagesPrivacy}
            />
          </View>
          <View style={styles.container1}>
            <Text style={GlobalStyles.h6}>Profile Picture</Text>
            <Text style={styles.subText}>
              Choose who can send you direct message
            </Text>
            <DropDown
              data={data}
              onSelectItem={(item) => setMessagesPrivacy(item)}
              placeholder="Select who can send you messages"
              selectedItem={messagesPrivacy}
            />
          </View>
          <View style={styles.container1}>
            <Text style={GlobalStyles.h6}>Activity</Text>
            <Text style={styles.subText}>
              Choose who can send you direct message
            </Text>
            <DropDown
              data={data}
              onSelectItem={(item) => setMessagesPrivacy(item)}
              placeholder="Select who can send you messages"
              selectedItem={messagesPrivacy}
            />
          </View>

          <AppButton
            title="Save"
            onPress={() => console.log("Save")}
            gradient={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default DataPrivacy;

const styles = StyleSheet.create({
  subText: {
    fontSize: 12,
    color: "#A0A0A0",
    marginTop: 3,
  },
  container1: {
    marginVertical: 10,
  },
});
