import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import SearchTextInput from "../../../components/user/home/SearchTextInput";

interface Props {
  navigation: any;
}

const members = [
  {
    id: 1,
    name: "Member 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Member 2",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Member 3",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Member 4",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Member 5",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Member 6",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "Member 7",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "Member 8",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "Member 9",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    name: "Member 10",
    image: "https://picsum.photos/200/300",
  },
];

const Members: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = React.useState("");

  const [theMembers, setTheMembers] = React.useState(members);

  const searchTheMembers = (text: string) => {
    setSearch(text);
    const filteredMembers = members.filter((member) =>
      member.name.toLowerCase().includes(text.toLowerCase())
    );
    setTheMembers(filteredMembers);
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <AppHeader title="Members" onPressIcon={() => navigation.goBack()} />
        <View style={{ flex: 1, marginTop: 15 }}>
          <SearchTextInput
            placeholder="Search for Members"
            value={search}
            onChangeValue={(text) => searchTheMembers(text)}
          />

          <View style={{ flex: 1, marginTop: 10 }}>
            <FlatList
              data={theMembers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={GlobalStyles.h6}>{item.name}</Text>
                    <Text style={GlobalStyles.subText}>Member</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({});
