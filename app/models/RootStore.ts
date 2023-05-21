import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NowPlayingModel } from "./NowPlaying"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  nowPlayingData: types.optional(NowPlayingModel, {} as any),
  trendingData: types.optional(NowPlayingModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
