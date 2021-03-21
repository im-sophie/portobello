<template>
    <q-page padding>
      <q-tab-panels :value="$store.state.ui.currentTabName" animated>
        <q-tab-panel name="profile">
          Profile
        </q-tab-panel>
        <q-tab-panel name="users">
          Users
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Settings'
});
</script>
