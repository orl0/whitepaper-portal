# pt-icon-plus

<div class="preview">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
        </div>
        <div class="pt-icon-plus__block">
            <div class="text text_size_xl">
                Добавить участника
            </div>
        </div>
    </div>
</div>

Самый маленький и самый популярный паттерн. `pt-icon-plus` ставит графический элемент, не обязательно иконку, рядом с контентом.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___


## Модификаторы блока

Модификаторы     | Значение                           | Описание
---------------- | ---------------------------------- | ----------------------------------------------------
`vertical-align` | `bottom` `center` `top` `baseline` | Вертикальное выравнивание иконки относительно текста
`distribute`     | `between` `center`                 | Распределение контента по горизонтали
`xs-direction`   | `column` `row`                     | Расположение элементов в строку или в колонку на экранах от xs
`s-direction`    | `column` `row`                     | Расположение элементов в строку или в колонку на экранах от s
`m-direction`    | `column` `row`                     | Расположение элементов в строку или в колонку на экранах от m
`l-direction`    | `column` `row`                     | Расположение элементов в строку или в колонку на экранах от l


### vertical-align:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">bottom</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">center</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">top</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_top">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">baseline</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_baseline">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>


### distribute:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">between</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center pt-icon-plus_distribute_between" style="min-width: 300px;">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

___


## Элементы

Элемент                   | Описание
------------------------- | -----------------------------------------
[icon](#Элемент-icon)     | Контейнер для графичекого элемента
[block](#Элемент-block)   | В него вкладывается контент, например текст


### Элемент icon

Элемент-контейнер для графического элемента. Может располагаться как до, так и после блока с текстом.

Модификаторы элемента `icon` | Значение                                            | Описание                 
---------------------------- | --------------------------------------------------- | -------------------------
`offset`                     | `2xs` `xs` `s` `m` `l`                              | Компенсация сверху
`offset`                     | `no`                                                | *DEPRECATED* Отмена компенсации сверху
`indent-l`                   | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Отступ слева
`indent-r`                   | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Отступ справа


#### indent-r:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">xxs</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_xxs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">xs</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">s</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">m</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_m icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">l</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_l icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
            </div>
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
        </div>
    </div>
</div>


#### indent-l:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">xxs</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xxs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">xs</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">s</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_s icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">m</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_m icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">l</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
            <div class="pt-icon-plus__block">
                <div class="text text_size_xl">
                    Добавить участника
                </div>
            </div>
            <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_l icon icon_size_m icon_view_primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
            </div>
        </div>
    </div>
</div>


### Элемент block

Элемент в который вкладывается контент, например текст. Используется без модификаторов.

___


## Пример

<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
    <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
    </div>
    <div class="pt-icon-plus__block">
        <div class="text text_size_xl">
            Добавить участника
        </div>
    </div>
</div>

```html
<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
    <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
    </div>
    <div class="pt-icon-plus__block">
        <div class="text text_size_xl">
            Добавить участника
        </div>
    </div>
</div>
```
