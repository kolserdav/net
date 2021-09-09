/**
 * Файл содержаший логику сервера
 */
import net from 'net';

// Создаем сервер
const server = net.createServer(async (con) => {
  // Подключенному клиенту шлет сообщение
  const arr = new Uint8Array(2);
  arr.fill(0x69, 0);
  arr.fill(0x0d, 1);
  con.write(arr);
  // Получает количество активных соединений и выводит в консоль
  const conns = await getCurrentConections(server);
  console.info('[SERVER] Client connected. Count of active connections: ', conns);
  /**
   * Обработчик соединения при получении данных
   */
  con.on('data', (d) => {
    console.log('[SERVER] Receiving data: ', d);
  });
  /**
   * Обработчик соединения
   * при ошибке
   */
  con.on('error', (d) => {
    console.error('[SERVER] Error connection', d);
  });
  /**
   * Обработчик соединения при закрытии
   */
  con.on('close', (e) => {
    server.getConnections((e, c) => {
      if (e) {
        console.error('[SERVER] connection closed with error: ', e);
      }
      console.info('[SERVER] Client disconnected. Count of active conections: ', c);
    });
  });
  /**
   * Обработчик соединения при окончании работы с данным клиентом
   */
  con.on('end', () => {
    console.log('[SERVER] End conection');
  });
});

/**
 * Ассинхронно получает из объекта server
 * текущее количество активных подключений
 * @param server
 * @returns
 */
async function getCurrentConections(server: net.Server): Promise<number> {
  return new Promise((resolve) => {
    server.getConnections((e, c) => {
      if (e) {
        console.error('[SERVER] Error get count of connections', e);
      }
      resolve(c);
    });
  });
}

const PORT = 25000;

server.listen(PORT, '127.0.0.1', () => {
  console.info(`Running socket server on port: ${PORT}`);
});
