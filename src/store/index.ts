/* eslint-disable @typescript-eslint/no-empty-interface */

import Vuex from 'vuex'
import { store } from 'quasar/wrappers';
import ui from './ui';

export interface StateInterface {}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  return new Vuex.Store<StateInterface>({
    modules: {
      ui
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  });
});
