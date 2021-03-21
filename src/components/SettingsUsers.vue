<template>
  <q-table
    :data="data"
    :columns="columns"
    row-key="id" />
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      data: [],
      columns: [
        {
          name: 'name',
          label: 'Name',

        }
      ]
    };
  }
});
</script>
