import {reactive} from 'vue';

export default reactive({
  selectedDatasets: [] as string[],
  loading: false as boolean,
});
