import { create } from 'zustand'

const store: tStore = (set) => ({
  homeCamera: iHomeCamera,
  setHomeCamera: (c) => set(() => ({ homeCamera: c })),
})

export type tStore = (set: any) => {
  homeCamera: typeof iHomeCamera
  setHomeCamera: (c: typeof iHomeCamera) => void
}

export const iHomeCamera: tHomeCamera = {
  position: [0, -0.1, 3],
  rotation: [0, 0, 0],
}

export type tHomeCamera = {
  position: [number, number, number]
  rotation: [number, number, number]
}

const store_State = create(store)

export default store_State