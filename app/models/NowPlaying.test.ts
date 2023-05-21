import { NowPlayingModel } from "./NowPlaying"

test("can be created", () => {
  const instance = NowPlayingModel.create({})

  expect(instance).toBeTruthy()
})
