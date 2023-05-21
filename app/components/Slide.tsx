import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, ImageStyle, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { makeImgPath } from "app/utils/utils"
import { BlurView } from "@react-native-community/blur"
import { Poster } from "./Poster"

export interface SlideProps {
  /**
   * An optional style override useful for padding & margin.
   */
  backdrop_path: string
  poster_path: string
  original_title: string
  vote_average: number
  overview: string
  fullData: object
}

/**
 * Describe your component here
 */
export const Slide = observer(function Slide(props: SlideProps) {
  return (
    <View style={{ flex: 1 }}>
      <Image style={$imageStyle} source={{ uri: makeImgPath(props.backdrop_path) }} />
      <BlurView blurAmount={1} blurType={"dark"} style={StyleSheet.absoluteFill}>
        <View style={$movieWrapper}>
          <Poster path={props.poster_path} />
          <View style={$posterTextWrapper}>
            <Text style={$posterTextTitle}>{props.original_title}</Text>
            {props.vote_average > 0 ? (
              <Text style={$posterVote}>★{props.vote_average}/10</Text>
            ) : null}
            <Text style={$posterOverView}>{props.overview.slice(0, 50)} ...</Text>
          </View>
        </View>
      </BlurView>
    </View>
  )
})

const $imageStyle: ImageStyle = {
  flex: 1,
}

const $movieWrapper: ViewStyle = {
  flexDirection: "row",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}

const $posterTextWrapper: ViewStyle = {
  width: "40%",
  marginLeft: 15,
}

const $posterTextTitle: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  color: "white",
}

const $posterVote: TextStyle = {
  marginTop: 7,
  fontSize: 12,
  lineHeight: 15,
  color: "rgba(255, 255, 255, 0.6)",
}
const $posterOverView: TextStyle = {
  marginTop: 7,
  fontSize: 14,
  lineHeight: 15,
  color: "rgba(255, 255, 255, 0.6)",
}
