import * as types from './mutation-types'

const matuations = {
  [types.ADD](state, count) {
    state.count += 1;
  },
  [types.REDUCE](state, count) {
    state.count -= 1;
  },
}

export default matuations
