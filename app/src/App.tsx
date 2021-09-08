import React, { useEffect } from 'react';
//import WebSocket from 'ws';
import './App.css';

function App() {
  useEffect(() => {
    

    const ws = new WebSocket('wss://localhost:25000', 'echo');

    ws.onopen = (d: any) => {
      console.log('Conntected', d)
    }

    ws.onmessage = (m: any) => {
      console.log('Message', 'm')
    }

    ws.onclose = (ev: any) => {
      console.log('Closed', ev)
    }

    ws.onerror = (e) => {
      console.error('Error', e)
    }
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
