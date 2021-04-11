import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UIStateInterface } from './state';

const getters: GetterTree<UIStateInterface, StateInterface> = {
  getCurrentTabName(state: UIStateInterface): string {
    return state.currentTabName;
  }
};

export default getters;
