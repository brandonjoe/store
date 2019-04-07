import axios from 'axios';
const instance = axios.create({
    baseURL:'https://peaches-and-cherries.firebaseio.com/'
})

export default instance;