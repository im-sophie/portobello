import PortobelloServiceClient from '../shared/PortobelloServiceClient';

declare module 'vue/types/vue' {
  interface Vue {
    portobelloServiceClient: PortobelloServiceClient
  }
}
