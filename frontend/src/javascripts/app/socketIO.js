import io from 'socket.io-client';

const socket = io('http://localhost:2020');

export default socket;