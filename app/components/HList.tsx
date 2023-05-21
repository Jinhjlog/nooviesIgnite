import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, ImageStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { FlatList } from "react-native-gesture-handler"
import { VMedia } from "./VMedia"

export interface HListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  title: string
  data: dataProps[]
}

interface dataProps {
  id: number
  poster_path: string
  original_title?: string
  original_name?: string
  vote_average?: number
}
/**
 * Describe your component here
 */
export const HList = observer(function HList(props: HListProps) {
  return (
    <View style={$ListContainer}>
      <Text style={$ListTitle}>{props.title}</Text>
      <FlatList
        data={props.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => {
          return <View style={$HListSperator}></View>
        }}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <VMedia
              poster_path={item.poster_path}
              original_title={item.original_title ?? item.original_name}
              vote_average={item.vote_average}
              fullData={item}
            />
          )
        }}
      />
    </View>
  )
})

const $ListContainer: ViewStyle = {
  marginBottom: 40,
}
const $ListTitle: TextStyle = {
  color: "black",
  fontSize: 18,
  fontWeight: "600",
  marginLeft: 20,
  marginBottom: 20,
}

const $HListSperator: ViewStyle = {
  width: 20,
}
