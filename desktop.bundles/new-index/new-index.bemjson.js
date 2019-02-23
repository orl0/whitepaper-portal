module.exports = {
	block: 'page',
	title: 'whitepaper',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
		{ elem: 'css', url: 'new-index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'new-index.min.js' }],
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'plex' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			content: [
				/* Menu */
				// {
				// 	block: 'new-menu',
				// },
				/* Menu */

				/* Intro */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'intro',
								content: [
									{
										elem: 'title',
										content: {
											block: 'text',
											mods: { size: 'xxxxxl', view: 'primary', font: 'mono' },
											content: 'Все интерфейсные сложности выражаются через комбинации простых сущностей'
										}
									}
								]
							}
						]
					}
				},
				/* /Intro  */

				/* Layers */
				{
					elem: 'content',
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'layers',
								content: [
									{
										block: 'layer-card',
										mods: { view: 'blue' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '1.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Тема'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Цвета, отступы, размеры, брейкпоиты'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '60' },
										mods: { view: 'red' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '2.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Каркас'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Обвязка, сетка'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '3' },
										mods: { view: 'black-blue' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '3.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Паттерны'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Списки, карточки, таблицы, формы и т.д.'
											}
										]
									},
									{
										block: 'layer-card',
										attrs: { 'data-scroll-speed': '1' },
										mods: { view: 'black-monochrome' },
										content: [
											{
												block: 'text',
												mods: { size: 'xxxxxxl', view: 'primary', font: 'mono' },
												content: '4.'
											},
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
												mods: { size: 'xxxl', view: 'primary', font: 'mono' },
												content: 'Контент'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'secondary', font: 'mono' },
												content: 'Типографика, бэйджи, аватарки'
											}
										]
									}
								]
							}
						]
					}
				},
				/* /Layers */

				/* Demo */
				{
					elem: 'content',
					attrs: { style: 'height: 400px' },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [

						]
					}
				},
				/* /Demo */

				/* Comparing */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'text',
								mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
								mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
								content: 'Как это работает'
							},
							{
								block: 'text',
								mods: { size: 'l', view: 'secondary', },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: 'Дизайн-система whitepaper помогает сократить количество этапов и участников, для того чтобы сформировать интерфейс готовый к продакшну'
							},
							{
								block: 'pt-list',
								elem: 'item',
								elemMods: { distribute: 'default', 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
								content: [
									{
										block: 'text',
										attrs: { style: 'width: 240px; margin-right: 20px;' },
										mods: { size: 'l', view: 'secondary' },
										content: 'Классический процесс'
									},
									{
										block: 'steps',
										content: [
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'Прототип'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'Дизайн'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'HTML & CSS'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'Фронтенд фреймворк'
											}
										]
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: 'Готово'
									}
								]
							},
							{
								block: 'pt-list',
								elem: 'item',
								elemMods: { distribute: 'default', 'vertical-align': 'center' },
								content: [
									{
										block: 'text',
										attrs: { style: 'width: 240px; margin-right: 20px;' },
										mods: { size: 'l', view: 'secondary' },
										content: 'Процесс по whitepaper'
									},
									{
										block: 'steps',
										content: [
											{
												block: 'step-badge',
												mix: { block: 'theme', mods: { color: 'whitepaper-brand' } },
												mods: { view: 'wp' },
												content: 'Дизайн-система'
											},
											{
												block: 'step-badge',
												mix: { block: 'theme', mods: { color: 'whitepaper-brand' } },
												mods: { view: 'wp' },
												content: 'Фронтенд фреймворк'
											}
										]
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: 'Готово'
									}
								]
							},
						]
					}
				},
				/* /Comparing */

				/* FAQ */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'text',
								mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
								mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
								content: 'Ответы на частые вопросы'
							},
							{
								block: 'tpl-grid',
								mods: { ratio: '1-1-1', 'col-gap': 'full', 'row-gap': 'half' },
								content: [
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— Можно ли попробовать в песочнице?'
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— Можно ли добавить в готовый проект?'
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— Как передавать UI в разработку?'
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— Можно ли использовать с Реактом?'
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— Можно ли переопределить блоки?'
									},
									{
										block: 'text',
										mods: { size: 'l', view: 'secondary' },
										content: '— В чём отличиет от Bootstrap?'
									}
								]
							}
						]
					}
				},
				/* /FAQ */

				/* Community / Events */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'tpl-grid',
								mods: { ratio: '1-1' },
								content: [
									{
										block: 'community',
										content: [
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
												mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
												content: 'Сообщество'
											},
											{
												block: 'pt-list',
												content: [
													{
														elem: 'item',
														elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
														content: [
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Блог'
															},
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Medium'
															}
														]
													},
													{
														elem: 'item',
														elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
														content: [
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Борд с задачами'
															},
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: '26 открытых'
															}
														]
													},
													{
														elem: 'item',
														elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
														content: [
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Telegram'
															},
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: '@whitepapertools'
															}
														]
													},
													{
														elem: 'item',
														elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
														content: [
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Codepen'
															},
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: '60 примеров'
															}
														]
													},
													{
														elem: 'item',
														elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
														content: [
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: 'Twitter'
															},
															{
																block: 'text',
																mods: { size: 'l', view: 'secondary' },
																content: '@whitepapertools'
															}
														]
													}
												]
											}
										]
									},
									{
										block: 'events',
										mix: [
											{ block: 'theme', mods: { color: 'whitepaper-brand' }},
											{ block: 'pt-card' }
										],
										content: [
											{
												elem: 'content',
												mix: { block: 'pt-card', elem: 'content' },
												content: [
													{
														block: 'text',
														mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
														mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
														content: 'События'
													},
													{
														block: 'pt-list',
														content: [
															{
																elem: 'item',
																elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
																content: [
																	{
																		block: 'text',
																		mods: { size: 'l', view: 'primary' },
																		content: 'Dribbble Meetup, 2018'
																	},
																	{
																		block: 'text',
																		mods: { size: 'l', view: 'primary' },
																		content: 'Санкт-Петербург'
																	}
																]
															},
															{
																elem: 'item',
																elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
																content: [
																	{
																		block: 'text',
																		mods: { size: 'l', view: 'primary' },
																		content: 'Web Standarts, 2018'
																	},
																	{
																		block: 'text',
																		mods: { size: 'l', view: 'primary' },
																		content: 'Москва'
																	}
																]
															}
														]
													}
												]
											},
											{
												elem: 'footer',
												mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
												content: [
													{
														block: 'text',
														mods: { size: 'l', view: 'secondary' },
														content: 'Если у вашей продуктовой команды есть потребность в персональной консультации, вы всегда можете святься с нами и договориться о частной лекции. Просто напишите нам на почту whatsup@whitepaper.tools'
													}
												]
											}
										]
									}
								]
							}
						]
					}
				},
				/* Community / Events */

				/* Contribution / Learning */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'tpl-grid',
								mods: { ratio: '1-1', 'col-gap': 'full' },
								content: [
									{
										block: 'contribution',
										content: [
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
												mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
												content: 'Контрибьюторы'
											},
											{
												block: 'avatars',
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
												content: [
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																tag: 'a',
																attrs: {
																	href: 'http://whitepaper.tools',
																	style: 'display: block'
																},
																content: [
																	{
																		block: 'image',
																		url: '/assets/team/kirill.jpg',
																		width: 40
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																content: [
																	{
																		elem: 'photo',
																		elemMods: { size: 's' },
																		tag: 'a',
																		attrs: {
																			href: 'http://whitepaper.tools',
																			style: 'display: block'
																		},
																		content: [
																			{
																				block: 'image',
																				url: '/assets/team/ksusha.jpg',
																				width: 40
																			}
																		]
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																content: [
																	{
																		elem: 'photo',
																		elemMods: { size: 's' },
																		tag: 'a',
																		attrs: {
																			href: 'http://whitepaper.tools',
																			style: 'display: block'
																		},
																		content: [
																			{
																				block: 'image',
																				url: '/assets/team/ilya.png',
																				width: 40
																			}
																		]
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																content: [
																	{
																		elem: 'photo',
																		elemMods: { size: 's' },
																		tag: 'a',
																		attrs: {
																			href: 'http://whitepaper.tools',
																			style: 'display: block'
																		},
																		content: [
																			{
																				block: 'image',
																				url: '/assets/team/nikita.png',
																				width: 40
																			}
																		]
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																content: [
																	{
																		elem: 'photo',
																		elemMods: { size: 's' },
																		tag: 'a',
																		attrs: {
																			href: 'http://whitepaper.tools',
																			style: 'display: block'
																		},
																		content: [
																			{
																				block: 'image',
																				url: '/assets/team/misha.png',
																				width: 40
																			}
																		]
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																content: [
																	{
																		elem: 'photo',
																		elemMods: { size: 's' },
																		tag: 'a',
																		attrs: {
																			href: 'http://whitepaper.tools',
																			style: 'display: block'
																		},
																		content: [
																			{
																				block: 'image',
																				url: '/assets/team/serega.png',
																				width: 40
																			}
																		]
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																tag: 'a',
																attrs: {
																	href: 'http://whitepaper.tools',
																	style: 'display: block'
																},
																content: [
																	{
																		block: 'image',
																		url: '/assets/team/julya.jpg',
																		width: 40
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																tag: 'a',
																attrs: {
																	href: 'http://whitepaper.tools',
																	style: 'display: block'
																},
																content: [
																	{
																		block: 'image',
																		url: '/assets/team/sava.jpg',
																		width: 40
																	}
																]
															}
														]
													},
													{
														block: 'avatar',
														content: [
															{
																elem: 'photo',
																elemMods: { size: 's' },
																tag: 'a',
																attrs: {
																	href: 'http://whitepaper.tools',
																	style: 'display: block'
																},
																content: [
																	{
																		block: 'image',
																		url: '/assets/team/vadik.jpg',
																		width: 40
																	}
																]
															}
														]
													}
												]
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary', },
												content: 'Вся работа над дизайн системой ведётся открыто. Всегда есть несколько задач разного уровня сложности, поэтому любой человек может внести свой вклад'
											},
											{
												block: 'doc',
												content: 'GitHub'
											}
										]
									},
									{
										block: 'contribution',
										content: [
											{
												block: 'text',
												mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
												mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
												content: 'Обучение'
											},
											{
												block: 'text',
												mods: { size: 'l', view: 'primary', },
												content: 'Для того, чтобы более уверено чувствовать себя в процессе сборки интерфейсов на whitepaper, мы рекоммендуем: 1. Укрепить ваши знания по вёрстке. 2. Ознакомится с БЭМ-методологией 3. Разобраться с принципами пост-обработки стилей'
											},
											{
												block: 'doc',
												content: 'Документация'
											}
										]
									}
								]
							}
						]
					}
				},
				/* Contribution / Learning */

				/* Start */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'text',
								mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
								mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
								content: 'Как начать использовать'
							},
							{
								block: 'text',
								mods: { size: 'l', view: 'secondary', },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: 'Для старта прототипирования с нуля можно установить БЭМ-платформу с предустановленной дизайн-системой и настроенной сборкой. В уже имеющийся проект можно подключить файл со всеми стилями дизайн-системы или установить её как зависимость'
							},
							{
								block: 'pt-list',
								elem: 'item',
								elemMods: { distribute: 'default', 'vertical-align': 'center' },
								content: [
									{
										block: 'steps',
										content: [
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'git clone'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'cd my-whitepaper-project'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: 'npm install'
											},
											{
												block: 'step-badge',
												mods: { view: 'other' },
												content: '0.0.0.0:8080/'
											}
										]
									}
								]
							},
							{
								block: 'pt-list',
								mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
								elem: 'item',
								elemMods: { distribute: 'default', 'vertical-align': 'center' },
								content: [
									{
										block: 'text',
										attrs: { style: 'width: 240px; margin-right: 20px;' },
										mods: { size: 'l', view: 'secondary' },
										content: 'В работающем проекте:'
									},
									{
										block: 'steps',
										content: [
											{
												block: 'step-badge',
												mix: { block: 'theme', mods: { color: 'whitepaper-brand' } },
												mods: { view: 'wp' },
												content: '<link rel="stylesheet"'
											},
											{
												block: 'step-badge',
												mix: { block: 'theme', mods: { color: 'whitepaper-brand' } },
												mods: { view: 'wp' },
												content: 'npm install whitepaper-bem'
											}
										]
									}
								]
							}
						]
					}
				},
				/* /Start */

				/* Partners */
				{
					elem: 'content',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
					content: {
						elem: 'container',
						elemMods: { align: 'center', size: 'm' },
						content: [
							{
								block: 'text',
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' } },
								mods: { size: 'xxxl', view: 'primary', weight: 'bold', },
								content: 'Будущие партнеры'
							},
							{
								block: 'tpl-grid',
								mods: { ratio: '1-1-1-1-1' },
								content: [
									{
										block: 'image',
										url: '/assets/partners/spotify-logo.svg',
										width: 150
									},
									{
										block: 'image',
										url: '/assets/partners/airbnb-logo.svg',
										width: 150
									},
									{
										block: 'image',
										url: '/assets/partners/youtube-logo.svg',
										width: 150
									},
									{
										block: 'image',
										url: '/assets/partners/microsoft-logo.svg',
										width: 150
									},
									{
										block: 'image',
										url: '/assets/partners/dropbox-logo.svg',
										width: 150
									}
								]
							}
						]
					}
				},
				/* /Partners */

				/* Yandex.Metrika counter */
				{
					block: 'count',
					content: {
						html: `<script type="text/javascript" >
						(function (d, w, c) {
								(w[c] = w[c] || []).push(function() {
										try {
												w.yaCounter50119540 = new Ya.Metrika2({
														id:50119540,
														clickmap:true,
														trackLinks:true,
														accurateTrackBounce:true,
														webvisor:true
												});
										} catch(e) { }
								});

								var n = d.getElementsByTagName("script")[0],
										s = d.createElement("script"),
										f = function () { n.parentNode.insertBefore(s, n); };
								s.type = "text/javascript";
								s.async = true;
								s.src = "https://mc.yandex.ru/metrika/tag.js";

								if (w.opera == "[object Opera]") {
										d.addEventListener("DOMContentLoaded", f, false);
								} else { f(); }
						})(document, window, "yandex_metrika_callbacks2");
				</script>
				<noscript><div><img src="https://mc.yandex.ru/watch/50119540" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`
					}
				},
				/* /Yandex.Metrika counter */

				/* Footer */
				{
					block: 'footer',
				}
				/* /Footer */

			]
		}
	]
};