import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  GestureResponderEvent,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./index.style";
import { SIZES, icons } from "../../../constants";

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<string>;
  handleClick: (event: GestureResponderEvent) => void;
}

const jobTypes: string[] = [
  "Full-time",
  "Part-time",
  "Freelancer",
  "Internship",
  "Temporary",
  "Contract",
  "Commission",
  "Volunteer",
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState<string>(jobTypes[0]);

  return (
    <View>
      <View style={styles().container}>
        <Text style={styles().userName}>Hello Bui Ngoc</Text>
        <Text style={styles().welcomeMessage}>Find your perfect job.</Text>
      </View>
      <View style={styles().searchContainer}>
        <View style={styles().searchWrapper}>
          <TextInput
            style={styles().searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What job do you look for?"
          />
        </View>
        <TouchableOpacity style={styles().searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles().searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles().tabsContainer}>
        <FlatList
          horizontal
          data={jobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles(activeJobType, item).tab}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles(activeJobType, item).tab}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
