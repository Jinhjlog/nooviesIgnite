import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { GetQuestionsResult, api } from "app/services/api"
import { array } from "mobx-state-tree/dist/internal"
import { PlayingModel } from "./Playing"

/**
 * Model description here for TypeScript hints.
 */
export const NowPlayingModel = types
  .model("NowPlaying")
  .props({
    // api데이터를 저장할 prop(변수) 추가
    // 수정
    trending: types.optional(types.array(PlayingModel), []),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    // jinhj : api호출 메소드 작성
    async getMovieTrending() {
      const results: GetQuestionsResult = await api.getMovieTrending()
      if (results.kind === "ok") {
        self.setProp("trending", results.results)
      } else {
        console.tron.error(`Error fetching trending: ${JSON.stringify(result)}`, [])
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface NowPlaying extends Instance<typeof NowPlayingModel> {}
export interface NowPlayingSnapshotOut extends SnapshotOut<typeof NowPlayingModel> {}
export interface NowPlayingSnapshotIn extends SnapshotIn<typeof NowPlayingModel> {}
export const createNowPlayingDefaultModel = () => types.optional(NowPlayingModel, {})
