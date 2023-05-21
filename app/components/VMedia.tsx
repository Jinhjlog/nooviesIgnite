import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Poster } from "./Poster"

export interface VMediaProps {
  /**
   * An optional style override useful for padding & margin.
   */
  poster_path: string
  original_title?: string
  vote_average?: number
  fullData: object
}

/**
 * Describe your component here
 */
export const VMedia = observer(function VMedia(props: VMediaProps) {
  return (
    <View style={$Container}>
      <Poster path={props.poster_path} />
      <Text style={$Title}>
        {props.original_title.slice(0, 8)}
        {props.original_title.length > 13 ? "..." : ""}
      </Text>
      <Text>
        {props.vote_average > 0 ? `★${props.vote_average.toFixed(1)} / 10` : `Coming soon`}
      </Text>
    </View>
  )
})

const $Container: ViewStyle = {
  alignItems: "center",
}

const $Title: TextStyle = {
  color: "black",
  fontWeight: "600",
  marginTop: 7,
  marginBottom: 5,
}

const $Votes: TextStyle = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: 10,
}
