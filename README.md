# decliner.js
### Мини-библиотека (637 байтов) для склонения исчисляемых русских слов
![decliner logo](decliner.png)

## Установка
Несколько вариантов установки библиотеки:
+ Склонировать репозиторий: **`git clone https://github.com/nmihalyov/decliner.git`**
+ Скачать .zip архив (зелёная кнопка **"Code"** -> **"Download ZIP"** на главной странице библиотеки)
+ Загрузка с помощью пакетных менеджеров:
  - NPM: **`npm i decliner`**
  - Bower: **`bower i decliner`**
  - Yarn: **`yarn add decliner`**

Далее просто включите библиотеку в ваш проект:
```html
<script src="%path%/decliner/dist/decliner.js"></script>
```
или её минифицированную версию
```html
<script src="%path%/decliner/dist/decliner.min.js"></script>
```
(где ```%path%``` - путь от корня проекта до папки в которую устанавливается пакет (или распаковывается архив))

## Использование
Для начала работы необходимо создать массив из трёх строк (вариантов склонения) в строгом порядке: 1 %предмет%, 2 %предмета%, 5 %предметов%

Например  
```javascript
const rubles = ['рубль', 'рубля', 'рублей'];
```

У данного массива можно вызвать метод ```decline()``` в аргумент, которой передать необходимое число:
```javascript
rubles.decline(105); // "рублей"
```

Этот метод также имеет второй параметр (по-умолчанию ```false```). Если в него передать ```true```, то число, передаваемое в качестве первого аргумента будет подставлено в строку через пробел:
```javascript
rubles.decline(105, true); // "105 рублей"
```

Упрощённая форма для многократного обращения:
```javascript
const rublesDecline = n => rubles.decline(n, true);

rublesDecline(123); // "123 рубля"
```

## Дополнительная информация
**decliner.js** умеет работать и с отрицательными значениями:
```javascript
rublesDecline(-50); // "-50 рублей"
```

И с вещественными числами:
```javascript
rublesDecline(0.4); // "0.4 рубля"
```

Благодарность можно выразить поставив этому репозиторию звезду, а также зайдя в другие репозитории моего аккаунта

## Обратная связь
Почта: [nikita.mihalyov@gmail.com](mailto:nikita.mihalyov@gmail.com)

Telegram: [@nmihalyov](http://t.me/nmihalyov)

ВКонтакте: [vk.com](https://vk.com/nmihalyov)

Мой сайт: [nmihalyov.tk](http://nmihalyov.tk)

[Написать issue](https://github.com/nmihalyov/decliner/issues/new)