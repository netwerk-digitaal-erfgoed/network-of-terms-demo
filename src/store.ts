import {reactive} from 'vue';
import {Source} from './query';

export default reactive({
  selectedDatasets: [] as string[],
  selectedGenres: [] as string[],
  sources: [] as Source[],
  loading: false as boolean,
});
