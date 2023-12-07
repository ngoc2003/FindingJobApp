import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "../../../constants";
import styles from "./index.style";

interface JobFooterProps {
  url: string;
}
const JobFooter = ({ url }: JobFooterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
