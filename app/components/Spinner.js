import React from "react";
import { Dimensions, ActivityIndicator, View } from "react-native";
import COLORS from 'app/theme/colors'

const {height, width} = Dimensions.get('window');

export default function Spinner(props) {
  if(props.show) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99
        }}
      >
        <ActivityIndicator color={COLORS.APP_THEME} size="large" />
      </View>
    );
  } else {
    return null;
  }
}