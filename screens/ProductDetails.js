import { View, Text } from "react-native";
import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export default function ProductDetails() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View>
      <Text>ProductDetails</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
