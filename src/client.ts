import net from 'net';

const client = new net.Socket({});

client.connect(25000, '127.0.0.1', () => {
  console.info('[CLIENT] Connected');
});

/**
 * Обработчик клиента при получении данных
 */
client.on('data', (data) => {
  // Выводит данные в бинарном виде
  console.log('[CLIENT] data', data);
  // Распознает символы из полученных чисел
  console.log('', String.fromCharCode(data[0]), String.fromCharCode(data[1]));
  // Через 10 секунд обрывает связь
  setTimeout(() => {
    client.destroy();
  }, 10000);
});

/**
 * Обработчик клиента при отключении от сервера
 */
client.on('close', function () {
  console.log('[CLIENT] Connection closed');
});
