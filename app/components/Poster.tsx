import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { makeImgPath } from "app/utils/utils"

export interface PosterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  path: string
}

/**
 * Describe your component here
 */
export const Poster = observer(function Poster(props: PosterProps) {
  return <Image style={$Image} source={{ uri: makeImgPath(props.path) }} />
})

const $Image: ImageStyle = {
  width: 80,
  height: 140,
  borderRadius: 5,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
}
