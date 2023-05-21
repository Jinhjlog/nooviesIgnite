import { PlayingModel } from "./Playing"

test("can be created", () => {
  const instance = PlayingModel.create({})

  expect(instance).toBeTruthy()
})
