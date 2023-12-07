import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./index.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/Card/PopularJobCard";
import useFetchData from "../../../hooks/useFetchData";
import { JobType } from "../../../types/jobs";

const PopularJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<string>("");

  const { data, isLoading, error, refetch } = useFetchData("search", {
    query: "React Developer",
    num_pages: "1",
    page: "1",
  });

  const handleCardPress = (item: JobType) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            renderItem={({ item }) => (
              <PopularJobCard
                selectedJob={selectedJob}
                handleCardPress={handleCardPress(item)}
                item={item}
              />
            )}
            contentContainerStyle={{
              gap: SIZES.medium,
            }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
