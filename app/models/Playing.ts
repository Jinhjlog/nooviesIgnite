import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const PlayingModel = types
  .model("Playing")
  .props({
    adult: types.boolean,
    backdrop_path: types.maybe(types.string),
    id: types.number,
    title: types.string,
    original_language: types.string,
    original_title: types.string,
    overview: types.string,
    poster_path: types.string,
    media_type: types.maybe(types.string),
    genre_ids: types.array(types.number),
    popularity: types.number,
    release_date: types.string,
    video: types.boolean,
    vote_average: types.number,
    vote_count: types.number,
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Playing extends Instance<typeof PlayingModel> {}
export interface PlayingSnapshotOut extends SnapshotOut<typeof PlayingModel> {}
export interface PlayingSnapshotIn extends SnapshotIn<typeof PlayingModel> {}
export const createPlayingDefaultModel = () => types.optional(PlayingModel, {})
