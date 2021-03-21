<template>
  <q-layout view='hHh lpR lFf'>

    <q-header reveal elevated class='bg-primary text-white'>
      <q-toolbar>
        <q-btn dense flat icon='menu' class='q-mr-sm'>
          <q-menu>
            <q-list>
              <q-item clickable v-close-popup to="/projects">
                <q-icon class='q-pr-xs' size='xs' name='dynamic_feed' />
                Projects
              </q-item>
              <q-item clickable v-close-popup to="/tickets">
                <q-icon class='q-pr-xs' size='xs' name='table_chart' />
                Tickets
              </q-item>
              <q-item clickable v-close-popup to="/wiki">
                <q-icon class='q-pr-xs' size='xs' name='article' />
                Wiki
              </q-item>
              <q-item clickable v-close-popup to="/cicd">
                <q-icon class='q-pr-xs' size='xs' name='autorenew' />
                CI/CD
              </q-item>
              <q-item clickable v-close-popup to="/monitoring">
                <q-icon class='q-pr-xs' size='xs' name='analytics' />
                Monitoring
              </q-item>
              <q-item clickable v-close-popup to="/settings">
                <q-icon class='q-pr-xs' size='xs' name='settings' />
                Settings
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title v-text='title' />
      </q-toolbar>

      <q-toolbar v-if="tabs.length > 0" class='q-pl-xl'>
        <q-tabs :value="$store.state.ui.currentTabName" @input="$store.commit('ui/updateCurrentTabName', $event)">
          <q-tab
            v-for="tab in tabs"
            :key="_getNameFromTabInfo(tab)"
            :name="_getNameFromTabInfo(tab)"
            :label="_getLabelFromTabInfo(tab)" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  props: {
    title: {
      type: String,
      required: true,
      validator(value: string) {
        return value.length > 0;
      }
    },
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    currentTabName: {
      type: String
    }
  },
  methods: {
    _getNameFromTabInfo<T>(tabInfo: T): string {
      return <string>(<Record<string, unknown>>tabInfo).name;
    },
    _getLabelFromTabInfo<T>(tabInfo: T): string {
      return <string>(<Record<string, unknown>>tabInfo).label;
    }
  }
});
</script>
