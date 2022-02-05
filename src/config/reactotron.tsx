import ReactoTron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

ReactoTron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();

console.tron = ReactoTron;
export default ReactoTron;




















