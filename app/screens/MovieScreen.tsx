import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { Playing } from "app/models/Playing"

interface MovieScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Movie">> {}

export const MovieScreen: FC<MovieScreenProps> = observer(function MovieScreen() {
  // Pull in one of our MST stores
  const { trendingStore } = useStores()
  const { trending } = trendingStore

  console.log(trending.length)

  // getData
  const fetchNowPlaying = () => {
    trendingStore.getMovieTrending()
  }

  // hooks
  useEffect(() => {
    fetchNowPlaying()
  }, [])

  // Components
  const NowPlayingComponent = ({ item }) => {
    const nowPlaying: Playing = item
    return (
      <View>
        <Text>hello</Text>
      </View>
    )
  }

  //Observed
  const ObservedNowPlaying = observer(NowPlayingComponent)

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="movie" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
