# Векторы

<div class="preview">
    <div class="vector vector_name_preview vector_size_m theme theme_color_whitepaper-portal-inverse">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" fill="var(--color-bg-brand)"/>
            <path d="M40 10L43.541 29.1019L57.6336 15.7295L49.2705 33.2646L68.5317 30.7295L51.459 40L68.5317 49.2705L49.2705 46.7354L57.6336 64.2705L43.541 50.8981L40 70L36.459 50.8981L22.3664 64.2705L30.7295 46.7354L11.4683 49.2705L28.541 40L11.4683 30.7295L30.7295 33.2646L22.3664 15.7295L36.459 29.1019L40 10Z" fill="var(--color-bg-default)"/>
        </svg>
    </div>
</div>

В whitepaper предусмотрен блок `vector`, который используется для крупных графических элементов более сложной структуры чем пиктограммы в `icon`. Может содержать элементы разных цветов. Блок является декоративным элементом страницы и дополнительно поддерживает контент, например, на промо-страницах.

Векторы можно вставлять инлайново, или с помощью шаблонизаторов.

* [Модификаторы блока](#Модификаторы-блока)
* [Пример](#Пример)

___

## Модификаторы блока

Модификатор   | Значение                            | Описание
--------------|-------------------------------------| ---------------------------------
`size`        | `m`                                 | Размер вектора

___

## Пример

<div class="vector vector_name_preview vector_size_m theme theme_color_whitepaper-portal-inverse">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" fill="var(--color-bg-brand)"/>
        <path d="M40 10L43.541 29.1019L57.6336 15.7295L49.2705 33.2646L68.5317 30.7295L51.459 40L68.5317 49.2705L49.2705 46.7354L57.6336 64.2705L43.541 50.8981L40 70L36.459 50.8981L22.3664 64.2705L30.7295 46.7354L11.4683 49.2705L28.541 40L11.4683 30.7295L30.7295 33.2646L22.3664 15.7295L36.459 29.1019L40 10Z" fill="var(--color-bg-default)"/>
    </svg>
</div>

``` html
<div class="vector vector_name_preview vector_size_m theme theme_color_whitepaper-portal-inverse">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" fill="var(--color-bg-brand)"/>
        <path d="M40 10L43.541 29.1019L57.6336 15.7295L49.2705 33.2646L68.5317 30.7295L51.459 40L68.5317 49.2705L49.2705 46.7354L57.6336 64.2705L43.541 50.8981L40 70L36.459 50.8981L22.3664 64.2705L30.7295 46.7354L11.4683 49.2705L28.541 40L11.4683 30.7295L30.7295 33.2646L22.3664 15.7295L36.459 29.1019L40 10Z" fill="var(--color-bg-default)"/>
    </svg>
</div>
```
