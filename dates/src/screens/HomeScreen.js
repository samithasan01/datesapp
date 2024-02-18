import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { profile } from "../../assets/images";
import { BellIcon } from "react-native-heroicons/outline";

const android = Platform.OS === "android";

export default function HomeScreen() {
  return (
    <SafeAreaView
      className="bg-white flex-1 justify-between"
      style={{
        paddingTop: android ? hp(2) : 0,
      }}
    >
      {/* Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        {/* Image */}
        <View className="rounded-full items-center justify-center">
          <Image
            source={profile}
            style={{
              width: hp(4.5),
              height: hp(4.5),
              resizeMode: "cover",
            }}
            className="rounded-full"
          />
        </View>

        {/* Brand name */}
        <View>
          <Text className="text-xl font-semibold text-center uppercase">
            Stacks Dates
          </Text>
        </View>

        {/* Bell Icon */}

        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            <BellIcon size={25} strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousal */}
      <View className="pb-4">
        <View className="mx-4 mb-4">
          <Text
            className="capitalize text-2xl"
            style={{
              fontFamily: "SpaceGroteskBold",
            }}
          >
            Find your love
          </Text>
        </View>
        <View>
          <Carousel data={datesData} />
        </View>
      </View>
    </SafeAreaView>
  );
}
