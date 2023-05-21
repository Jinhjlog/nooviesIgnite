import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Dimensions } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { Playing } from "app/models/Playing"
import Swiper from "react-native-swiper"
import { Slide } from "app/components/Slide"
import { HList } from "app/components/HList"

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window")

interface MovieScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Movie">> {}

export const MovieScreen: FC<MovieScreenProps> = observer(function MovieScreen() {
  // Pull in one of our MST stores
  const { nowPlayingData } = useStores()
  const { nowPlaying } = nowPlayingData
  const { trending } = nowPlayingData
  // getData
  const fetchNowPlaying = () => {
    nowPlayingData.getMovieTrending()
    nowPlayingData.getMovieNowPlaying()
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

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return false ? (
    ""
  ) : (
    <Screen style={$root} preset="scroll">
      <Swiper
        containerStyle={{
          marginBottom: 30,
          width: "100%",
          height: SCREEN_HEIGHT / 4,
        }}
        loop={true}
        autoplay={true}
        autoplayTimeout={3.5}
        showsPagination={false}
      >
        {nowPlaying?.map((movie, index) => {
          return (
            <Slide
              key={movie.id}
              backdrop_path={movie.backdrop_path || ""}
              fullData={movie}
              original_title={movie.original_title}
              overview={movie.overview}
              poster_path={movie.poster_path || ""}
              vote_average={movie.vote_average}
            ></Slide>
          )
        })}
      </Swiper>
      {trending ? <HList title="Trending Movies" data={trending} /> : null}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
