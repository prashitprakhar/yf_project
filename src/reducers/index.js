import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import imageProcessingReducer from './imageProcessingReducer';
//import BarChartDataReducer from './barChartDataReducer';

export default combineReducers({
    //banana : () => []
    auth: AuthReducer,
    imageProcessing : imageProcessingReducer
    //chartData: BarChartDataReducer
})