# cp-forum-integration

## Запуск контейнера на локальной машине (3000 порт)
```
docker-compose up -d
```

## Публикация
В текущей конфигурации публикация происходит по push в ветку master.


# Тестирование

Тестировать на форуме [пежо](https://peugeot-club.net/forum/topic/19034/)

## Вариант 1. Через chrome extension

[Видео инструкция](https://www.loom.com/share/b37d0869b3854b06895e1de4f4a78d2f)

1. Скачиваем расширение [тут](https://github.com/B2BFamily/cp-peugeot-ge/releases/download/v1.0/dist.zip)
2. Распаковываем в папку (Важно, внутри папки должны быть уже файлы расширения, а не еще одна папка `dist`)
3. Открываем в браузере вкладку [chrome://extensions/](chrome://extensions/)
4. Включаем решим разработчика 

![Developer Mode Checkbox](assets/dev_mode.png)

5. Загружаем папку со скачанным расширением 

![Load Unpacked Button](assets/load_unpacked.png)

6. Само расширение будет выглядеть следующим образом: 

![Extension Loaded](assets/ext_loaded.png)

##

## Вариант 2. Загрузка MVP вручную (Внимание! Это надо будет делать после каждой загрузки страницы!)
Для этого необходимо ввести в консоль браузера на нужной странице 
```js
var loadJS=function(e,t){var a=document.createElement("script");a.src=e,t.appendChild(a)};loadJS("https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js",document.body);
```

### Нужно еще раз увидеть велком?
Для этого необходимо ввести в консоль браузера на нужной странице и после этого обновить страницу
```js
document.cookie = 'cpfwellcome={\"data\":false}; path=/; expires=' + new Date(new Date().getTime() + 60 * 1000 * 60 * 24 * 1).toUTCString();
```