import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  GestureResponderEvent,
} from "react-native";

import { SIZES } from "../../../constants";
import styles from "./index.style";

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: (event: GestureResponderEvent) => void;
}

interface JobTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<string>;
}

function TabButton({ name, activeTab, onHandleSearchType }: TabButtonProps) {
  return (
    <TouchableOpacity
      style={styles(name, activeTab).btn}
      onPress={onHandleSearchType}
    >
      <Text style={styles(name, activeTab).btnText}>{name}</Text>
    </TouchableOpacity>
  );
}

const JobTabs = ({ tabs, activeTab, setActiveTab }: JobTabsProps) => {
  return (
    <View style={styles().container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default JobTabs;
