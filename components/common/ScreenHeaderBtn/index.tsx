import React from "react";
import { DimensionValue, Image, TouchableOpacity } from "react-native";
import styles from "./index.style";

interface ScreenHeaderBtnProps {
  iconUrl?: any;
  dimension: DimensionValue;
  handlePress?: any;
}

export const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles().btnContainer} onPress={handlePress}>
      <Image
        source={
          iconUrl ??
          "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/401057557_2614949915327413_348959346711264052_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=PweQbQA3wYYAX8LOSmZ&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAfCVGKyJWx1fR3cdrn3yn8yGw5T-FsRemWOBZtF8oS2A&oe=65777AAE"
        }
        resizeMode="cover"
        style={styles(dimension).btnImg}
      />
    </TouchableOpacity>
  );
};
