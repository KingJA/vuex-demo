import * as types from './mutation-types'

const matuations = {
  [types.ADD](state) {
    state.count += 1;
  },
  [types.REDUCE](state) {
    state.count -= 1;
  },
}

export default matuations
