/**
 * ИНСТРУКЦИЯ:
 * 1. Все поля должны быть прописаны. Если нет содержимого, например, нет ссылки, то просто вставляем пустую строку — ""
 * 2. Все списки разбиваются на пункты, которые заполняются внутри квадратных скобок [] и перечисляются через запятую. Если список
 * состоит из одного пункта, всё равно прописываем его в скобках
 * 3. Картинки добавляются в папку images. Вне зависимости от формата изображения (jpeg|png) мы пишем расширение .webp.
 * Папка mock создана для демонстрации и не должна использоваться в качестве хранилища фотографий.
 * Пример пути для изображения — ./images/my-image.webp
 * 4. id - это уникальный идентификатор рецепта. Последовательно прибавляем единичку от id предыдущего рецепта, начиная с 1.
 * 5. Любой текст обязательно оборачивается в кавычки. Если внутри названия уже есть какие-то кавычки - заменяем их на кавычки-ёлочки, например - "Говорят, «тощих»..."
 * 6. Если будет что-то непонятно при заполнении, можно написать мне в телеграм - @lefhl
 */

export default [
  {
    id: 1,
    title: "Печенье-картошка в виде пауков",
    image: "./images/mock/receipt-big.webp",
    author: "NIMBUS2000",
    authorLink: "https://vk.com",
    description:
      "Говорят, «тощих» людей легче похитить, но ведь толстяков проще догнать и пальчики у них вкуснее.",
    ingredients: ["Гречка зелёная 1/2 стак", "Яблоко 1 шт", "Банан 1 шт"],
    category: "Закуска",
    steps: [
      "Зелёную гречку помыть и замочить минимумна 2 часа, но лучше на ночь.",
      "Все фрукты моем, нарезаем, предварительно сняв с банана шкурку, а виноград можно оставить без нарезания. Соединяем фрукты, перемешиваем и раскладываем по тарелочкам.",
      "После замачивания зелёную гречку промываеми отправляем в чашу блендера. Моем финики, вынимаем косточку и тоже в блендер. Доливаем воды или растительное молокои взбиваем. Получившимся соусом заливаем фрукты и готово!",
    ],
  },
  {
    id: 2,
    title: "Пиццы в виде мумий",
    image: "./images/mock/2.webp",
    author: "Sirius Black",
    description: "",
    category: "Закуска",
    authorLink: "",
    ingredients: [
      "Гречка зелёная 1/2 стак",
      "Яблоко 1 шт",
      "Банан 1 шт",
      "Нектарин 1 шт",
      "Виноград зелёный 20-30 ягод",
      "Финики 2-4 шт",
    ],
    steps: [
      "Зелёную гречку помыть и замочить минимумна 2 часа, но лучше на ночь.",
      "Все фрукты моем, нарезаем, предварительно сняв с банана шкурку, а виноград можно оставить без нарезания. Соединяем фрукты, перемешиваем и раскладываем по тарелочкам.",
      "После замачивания зелёную гречку промываеми отправляем в чашу блендера. Моем финики, вынимаем косточку и тоже в блендер. Доливаем воды или растительное молокои взбиваем. Получившимся соусом заливаем фрукты и готово!",
    ],
  },
  {
    id: 3,
    title: "Печенье-картошка в виде пауков",
    image: "./images/mock/receipt-big.webp",
    author: "Just Noname",
    authorLink: "",
    description: "",
    category: "Десерт",
    ingredients: [
      "Гречка зелёная 1/2 стак",
      "Яблоко 1 шт",
      "Банан 1 шт",
      "Нектарин 1 шт",
      "Финики 2-4 шт",
    ],
    steps: [
      "Зелёную гречку помыть и замочить минимумна 2 часа, но лучше на ночь.",
      "Все фрукты моем, нарезаем, предварительно сняв с банана шкурку, а виноград можно оставить без нарезания. Соединяем фрукты, перемешиваем и раскладываем по тарелочкам.",
      "После замачивания зелёную гречку промываеми отправляем в чашу блендера. Моем финики, вынимаем косточку и тоже в блендер. Доливаем воды или растительное молокои взбиваем. Получившимся соусом заливаем фрукты и готово!",
    ],
  },
  {
    id: 4,
    title: "Печенье-картошка в виде пауков",
    image: "./images/mock/receipt-big.webp",
    author: "Just Noname",
    authorLink: "",
    description: "",
    category: "Десерт",
    ingredients: [
      "Гречка зелёная 1/2 стак",
      "Яблоко 1 шт",
      "Банан 1 шт",
      "Нектарин 1 шт",
      "Финики 2-4 шт",
    ],
    steps: [
      "Зелёную гречку помыть и замочить минимумна 2 часа, но лучше на ночь.",
      "Все фрукты моем, нарезаем, предварительно сняв с банана шкурку, а виноград можно оставить без нарезания. Соединяем фрукты, перемешиваем и раскладываем по тарелочкам.",
      "После замачивания зелёную гречку промываеми отправляем в чашу блендера. Моем финики, вынимаем косточку и тоже в блендер. Доливаем воды или растительное молокои взбиваем. Получившимся соусом заливаем фрукты и готово!",
    ],
  },
];
