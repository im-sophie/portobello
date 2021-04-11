<template>
    <q-page padding>
      <q-tab-panels :value="$store.state.ui.currentTabName" animated>
        <q-tab-panel name="profile">
          Profile
        </q-tab-panel>
        <q-tab-panel name="users">
          <pb-settings-users />
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import SettingsUsers from '../components/SettingsUsers.vue';

export default defineComponent({
  name: 'Settings',
  components: {
    'pb-settings-users': SettingsUsers
  }
});
</script>
