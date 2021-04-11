<template>
  <q-table
    :data="data"
    :columns="columns"
    row-key="id" />
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  data() {
    return {
      data: [],
      columns: [
        {
          name: 'id',
          label: '#',
          field: 'id'
        },
        {
          name: 'name',
          label: 'Name',
          field: 'name'
        },
        {
          name: 'email',
          label: 'Email Address',
          field: 'email'
        }
      ]
    };
  },
  async mounted() {
    this.data = await this.portobelloServiceClient.getAllUsers();
  }
});
</script>
