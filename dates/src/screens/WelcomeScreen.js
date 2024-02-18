import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";

export default function WelcomeScreen() {
  const [fontsLoaded, fontError] = useFonts(
    SpaceGroteskSemiBold,
    require("../font/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold,
    require("../font/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium,
    require("../font/SpaceGrotesk-Medium.ttf")
  );

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      className="flex-1"
      style={{
        width: WebGLProgram(100),
      }}
    >
      <View
        className="justify-center items-center"
        style={{
          width: wp(100),
          height: wp(100),
        }}
      >
        {/* Heart Icon Image */}
        <View className="justify-center items-center my-4">
          style=
          {{
            width: wp(100),
          }}
          <Image source={require("../../assets/HeartIcon.png")} />
          source={require("../../assets/HeartIcon.png")}
          style=
          {{
            width: wp(100),
            height: hp(40),
            resizeMode: "contain",
          }}
        </View>
        {/* Welcome Text */}
        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGroteskBold",
            }}
          >
            Embrace
          </Text>

          <Text
            className="tracking-widest w-[70%] leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGroteskBold",
            }}
          >
            A New Way of Dating
          </Text>
          <Text
            className="tex-ray-800 leading-6 tracking-wider w-[70%] mt-2"
            style={{
              fontSize: wp(4),
              fontFamily: "SpaceGroteskBold",
            }}
          >
            Combine cuttting edge technologies with a futuristic approach to
            dating.
          </Text>
        </View>

        <View className="w-full px-10">
          <TouchableOpacity className="bg-[#f26322] px-4 py-4 rounded-x1 flex-row justify-center items-center w-[45%]">
            <Text
              className="text-white font bold mr-2"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGroteskMedium",
              }}
            >
              Get Started
            </Text>
            <ArrowUpRightIcon color={"white"} size={20} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
