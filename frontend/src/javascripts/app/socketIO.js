import io from 'socket.io-client';
import AppConfig from '../config';

const socket = io(AppConfig.host);

export default socket;