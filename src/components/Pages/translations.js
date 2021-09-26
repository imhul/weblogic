import React from 'react';
const translations = {
    'english': {

        // common EN
        'summary': 'Summary',
        'demo': 'Demo',
        'released': 'Released',
        'status': 'Status',
        'project_desc': 'Description',
        'intro': 'Intro',
        'roadmap': 'Roadmap',
        'works': 'Works',
        'contacts': 'Contacts',
        'nov': 'Nov',
        'dec': 'Dec',
        'aug': 'Aug',

        // Contacts EN
        'contact_form': 'Contact Form',
        'rate_us': 'Rate this page',
        'or': 'or',
        'copy_contacts': 'copy contacts',
        'copy_email': 'Copy email to clipboard',
        'copy_phone': 'Copy phone to clipboard',
        'cooperation_ready': 'Always ready for mutually beneficial cooperation.',
        'submit': 'Submit',
        'placeholder': 'Your Message',
        'linkedin': 'My personal LinkedIn Page',
        'github': 'My personal GitHub',
        'myCV': 'My CV',
        'message_success_phone': 'Phone number successfully copied!',
        'message_success_email': 'Email address successfully copied!',
        'message_success': 'Message sent successfully!',
        'message_error': 'Error while sending!',
        'message_error_phone': 'Error while sending: Enter the phone number!',
        'message_error_wrong': 'Something wrong!',
        

        // Intro EN
        'believe': 'I believe that design makes the world better',
        'my_name': 'Tkachuk Zakhar',
        'front_dev': 'front-end developer',
        'tagline': <span>Using new technologies, such as <mark> React </mark> or <mark> Svelte </mark> always gives inspiration. I prefer non-standard <mark>UI</mark> and <mark>UX</mark> solutions, taking as a basis the concept of <mark>Material Design</mark> and <mark>Neumorphism</mark></span>,
        'what_i_do': 'What I do?',
        'my_offer': 'I offer turnkey websites development (including but not limited to): UI/UX design and mockup drawing, responsive and adaptive design. I also advise on promotion and search engine optimization of web resourses',
        'fav_tech': 'Favorite technologies',

        // Roadmap EN
        'step_2009': 'I started learning CSS, HTML, Joomla CMS and the web design basics with Adobe Photoshop. I made the first site on pure html + css and one more on Joomla',
        'step_2011': 'Got carried away by studying SEO',
        'step_2013': 'Put my first record: brought the site from development to Google Search top-3 in three days',
        'step_2015': 'By this time I have completed more than 50 individual orders for the site development based on Joomla CMS and decided to take courses in JavaScript',
        'step_2016': 'There was a little experience with Angular. Learned the basics of Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp, etc.',
        'step_2017': 'Started learning React',
        'step_2018': 'Learned React-router + hystory. Started Lectrum 2 month Redux Intensive courses and learned next libraries: Redux, Redux-Saga, immutable.js, socket.io. Was very pleasantly surprised by the Parcel!',

        // Works EN
        'work_1': 'Puzzle game, JavaScript + Canvas + design',
        'work_2': 'Corporate project, Joomla + design',
        'work_3': 'LED-screen calculator, Angular + Materialize + design',
        'work_4': 'Analytical resource, JavaScript + jQuery + Materialize + design',
        'work_5': 'Web presentation, Rreveal.js',
        'work_6': 'e-commerce project, React + Redux + masonry + design',
        'demo_status_desc': '* Demo status means that the project is available for viewing on my site.',
        'released_status_desc': '** The project in the Release status is a finished product and is hosted on the client\'\s production server.',
        'current_projects': 'Current Projects',

    },

    'russian': {

        // common RU
        'summary': 'Резюме',
        'demo': 'Демо',
        'released': 'Релиз',
        'status': 'Статус',
        'project_desc': 'Описание',
        'intro': 'Вступление',
        'roadmap': 'Путь',
        'works': 'Работы',
        'contacts': 'Контакты',
        'nov': 'Ноябрь',
        'dec': 'Декабрь',
        'aug': 'Август',


        // Contacts RU
        'contact_form': 'Форма обратной связи',
        'rate_us': 'Оцените этот сайт',
        'or': 'или',
        'copy_contacts': 'скопируйте контакты',
        'copy_email': 'Копировать email',
        'copy_phone': 'Копировать телефон',
        'cooperation_ready': 'Всегда готов к взаимовыгодному сотрудничеству.',
        'submit': 'Отправить',
        'placeholder': 'Ваше сообщение',
        'linkedin': 'Моя страница на LinkedIn',
        'github': 'Мой GitHub аккаунт',
        'myCV': 'Посмотреть моё резюме',
        'message_success_phone': 'Номер телефона успешно скопирован!',
        'message_success_email': 'Эл. адрес успешно скопирован!',
        'message_success': 'Сообщение успешно отправлено!',
        'message_error': 'Ошибка при отправке!',
        'message_error_phone': 'Ошибка при отправке: введите номер телефона!',
        'message_error_wrong': 'Что-то пошло не так!',

        // Intro RU
        'believe': 'Я верю, что дизайн делает мир лучше',
        'my_name': 'Ткачук Захар',
        'front_dev': 'фронт-энд разработчик',
        'tagline': <span>Использование новых технологий, таких как <mark>React</mark> или <mark>Hyperapp</mark> всегда даёт вдохновение. Я предпочитаю нестандартные <mark>UI</mark> и <mark>UX</mark> решения, беря за основу концепции <mark>Material Design</mark></span>,
        'what_i_do': 'Что я предлагаю',
        'my_offer': 'Я предлагаю услуги по разработке сайтов под ключ, такие как: разработка дизайна, включая UI/UX дизайн и отрисовку макета, резиновая или адаптивная вёрстка, разработка и поисковая олптимизация сайта. Так же я предоставляю консультации по продвижению и поисковой оптимизации интернет-ресурсов.',
        'fav_tech': 'Любимые технологии',

        // Roadmap RU
        'step_2009': 'Я начал изучать CSS, HTML, Joomla CMS а так же основы веб-дизайна и Adobe Photoshop. Вскоре я сделал свой первый заказ - сайт на чистом html + css. Второй сайт я сделал на Joomla',
        'step_2011': 'Увлёкся изучением SEO',
        'step_2013': 'Поставил свой первый рекорд: сделав сайт с нуля, вывел в топ-3 в поиске Google за три дня',
        'step_2015': 'К этому времени на моём счету было около 50 выполненых заказов по разработке сайтов на Joomla CMS. Это подтолкнуло меня пойти на курсы по JavaScript',
        'step_2016': 'Был небольшой опыт работы с Angular. Выучил основы рабочего окружения, в т.ч. Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp',
        'step_2017': 'Начал изучать React',
        'step_2018': 'Изучил React-router + hystory. Прошел двухмесячный курс Lectrum Redux Intensive, где изучил такие библиотеки: Redux, Redux-Saga, immutable.js, socket.io. Был приятно удивлён появлением Parcel!',

        // Works RU
        'work_1': 'Игра "Пазлы", JavaScript + Canvas + дизайн',
        'work_2': 'Корпоративный сайт, Joomla + дизайн',
        'work_3': 'Калькулятор LED панелей, Angular + Materialize + дизайн',
        'work_4': 'Аналитический ресурс, JavaScript + jQuery + Materialize + дизайн',
        'work_5': 'Веб-презентация, Rreveal.js',
        'work_6': 'Интернет-магазин, React + Redux + masonry + дизайн',
        'demo_status_desc': '* Статус Демо означает, что проект доступен для просмотра на моём сайте.',
        'released_status_desc': '** Проект в статусе Релиз является готовым продуктом и размещён на сервере клиента.',
        'current_projects': 'Текущие проекты',

    } 
};

const translate = (lang, text) => {
    return translations[lang][text];
};

export default translate;
