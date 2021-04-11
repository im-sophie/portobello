import { boot } from 'quasar/wrappers'
import PortobelloServiceClient from '../shared/PortobelloServiceClient';

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.portobelloServiceClient = new PortobelloServiceClient();
})
