# Пример использования класса net.Socket

## Требования

### Системные

```
node.js v^14.15.4
```

### Глобальные пакеты Node.js

```
yarn v^1.22.10
```

## Установка

Копируем исходный код в папку:

```
git clone https://github.com/kolserdav/net
```

Перейдя в неё устанавливаем зависимости:

```
cd net
yarn install
```

## Запуск сервера

### В разработке

Собираем код

```
yarn ts
```

Запускаем сервер

```
yarn dev
```

### В производстве

Собираем код

```
yarn build
```

Запускаем сервер

```
yarn start
```

## Запуск клиента

Выполнять в одном или нескольких окнах, через 10 секунд после подключения клиент запланируемо отваливается:

```
yarn client
```
