import { MutationTree } from 'vuex';
import { UIStateInterface } from './state';

const mutation: MutationTree<UIStateInterface> = {
  updateCurrentTabName(state: UIStateInterface, value: string): void {
    state.currentTabName = value;
  }
};

export default mutation;
