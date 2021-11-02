# decliner.js
### Мини-библиотека для склонения исчисляемых русских слов
![decliner logo](decliner.png)

## Установка
### NPM: 
```bash
npm i decliner
```
### Yarn 
```bash
yarn add decliner
```

## Использование
Импортируйте класс `Decliner` из пакета в нужный файл.
```javascript
import Decliner from 'decliner'
```

Конструктор класса принимает два параметра:
1. Массив склоняемых слов в формате
```javascript
['рубль', 'рубля', 'рублей']
```
2. Объект с настройками
```javascript
{format: '{{num}} {{value}}'}
```

Примеры использования:
```javascript
const decliner = new Decliner(['рубль', 'рубля', 'рублей']);

decliner.decline(1); // "рубль"
decliner.decline(2); // "рубля"
decliner.decline(5); // "рублей"
```
```javascript
const decliner = new Decliner(['рубль', 'рубля', 'рублей'], {format: '{{num}} {{value}}'});

decliner.decline(1); // "1 рубль"
decliner.decline(2); // "2 рубля"
decliner.decline(5); // "5 рублей"
```


## Настройки:
### `format`
Строка, форматирующая возвращаемый методом `decline` результат, подстроки `{{num}}` и `{{value}}` заменяются на число и значение соответственно
```javascript
format: '{{num}} {{value}}'
```

## Методы
### `setOptions`
Принимает объект, изменяющий настройки и возвращает текущий экземпляр класса.
```javascript
const decliner = new Decliner(array, {format: '{{num}} {{value}}'});

decliner.setOptions({format: '{{value}} {{num}}'});
```

### `decline`
Принимает число, по которому необходимо склонить слово из массива. Если форматирование не задано, то возвращает только слово из массива.
```javascript
const decliner = new Decliner(['рубль', 'рубля', 'рублей']);

decliner.decline(50); // "рублей"
```

## Дополнительно
**decliner.js** умеет работать и с отрицательными значениями:
```javascript
decliner.decline(-50); // "-50 рублей"
```

И с вещественными числами:
```javascript
decliner.decline(125.4); // "125.4 рубля"
```

Благодарность можно выразить поставив этому репозиторию звезду, а также зайдя в другие репозитории моего аккаунта

## Обратная связь
Почта: [nikita.mihalyov@gmail.com](mailto:nikita.mihalyov@gmail.com)

Telegram: [@nmihalyov](http://t.me/nmihalyov)

ВКонтакте: [vk.com](https://vk.com/nmihalyov)

Мой сайт: [nmihalyov.tk](https://nmihalyov.tk)

[Написать issue](https://github.com/nmihalyov/decliner/issues/new)