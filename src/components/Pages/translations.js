import React from 'react';
const translations = {
  english: {
    // common EN
    summary: 'Summary',
    demo: 'Demo',
    released: 'Released',
    status: 'Status',
    project_desc: 'Description',
    intro: 'Intro',
    roadmap: 'Roadmap',
    works: 'Works',
    contacts: 'Contacts',
    nov: 'Nov',
    dec: 'Dec',
    aug: 'Aug',

    // Contacts EN
    contact_form: 'Contact Form',
    rate_us: 'Rate this page',
    or: 'or',
    copy_contacts: 'copy contacts',
    copy_email: 'Copy email to clipboard',
    copy_phone: 'Copy phone to clipboard',
    cooperation_ready: 'Always ready for mutually beneficial cooperation.',
    submit: 'Submit',
    placeholder: 'Your Message',
    linkedin: 'My personal LinkedIn Page',
    codecademy: 'My Codecademy Profile',
    github: 'My personal GitHub',
    myCV: 'My CV',
    message_success_phone: 'Phone number successfully copied!',
    message_success_email: 'Email address successfully copied!',
    message_success: 'Message sent successfully!',
    message_success_recaptcha: 'You have successfully passed the verification!',
    message_error: 'Error while sending!',
    message_error_phone: 'Error while sending: Enter the phone number!',
    message_error_wrong: 'Something wrong!',
    message_error_recaptcha: 'Recaptca server is not response!',

    // Intro EN
    believe: 'I believe that design makes the world better',
    my_name: 'Tkachuk Zakhar',
    front_dev: 'front-end developer',
    tagline: (
      <span>
        Using new technologies, such as <mark> React </mark> or <mark> Svelte </mark> always gives
        inspiration. I prefer non-standard <mark>UI</mark> and <mark>UX</mark> solutions, taking as
        a basis the concept of <mark>Material Design</mark> and <mark>Neumorphism</mark>
      </span>
    ),
    what_i_do: 'What I do?',
    my_offer:
      'I offer turnkey websites development (including but not limited to): UI/UX design and mockup drawing, responsive and adaptive design. I also advise on promotion and search engine optimization of web resourses',
    fav_tech: 'Favorite technologies',

    // Roadmap EN
    step_2009:
      'I started learning CSS, HTML, Joomla CMS and the web design basics with Adobe Photoshop. I made the first site on pure html + css and one more on Joomla',
    step_2011: 'Got carried away by studying SEO',
    step_2013:
      'Put my first record: brought the site from development to Google Search top-3 in three days',
    step_2015:
      'By this time I have completed more than 50 individual orders for the site development based on Joomla CMS and decided to take courses in JavaScript',
    step_2016:
      'There was a little experience with Angular. Learned the basics of Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp, etc.',
    step_2017: 'Started learning React',
    step_2018:
      'Learned React-router + hystory. Started Lectrum 2 month Redux Intensive courses and learned next libraries: Redux, Redux-Saga, immutable.js, socket.io. Was very pleasantly surprised by the Parcel!',
    step_2021:
      "Did a bit of work with Getsby and GraphQL. But later I joined the growing Svelte community as well as SvelteKIt and it's amazing! This is one of the best technologies I've come across. Thanks to this, I have a better understanding of SSR.",

    // Works EN
    work_1: 'Puzzle game, JavaScript + Canvas + design',
    work_2: 'Corporate project, Joomla + design',
    work_3: 'LED-screen calculator, Angular.js + Materialize + design',
    work_4: 'Next-gen test management system for automated & manual tests. React + Mobx',
    work_5: 'National payment service. Angular 8 + Material-UI',
    work_6: 'e-commerce project, React + Redux + masonry + design',
    work_7: (
      <span>
        The{' '}
        <a href="/isoftbet" target="_blank" rel="external">
          iSoftBet
        </a>{' '}
        European online casino game, which was released in 2017. Then an{' '}
        <a href="/isoftbet-article" target="_blank" rel="external">
          article
        </a>{' '}
        was written about her. Animation on Pixi.js + TypeScript
      </span>
    ),
    work_8: 'Analytical resource, JavaScript + jQuery + Materialize + design',
    work_9:
      'An application to clean your subscription list from bounces, and enrich data with customers. Verify your real customers in one way. SvelteKit + SCSS + RSS Feed',
    demo_status_desc: '* Demo status means that the project is available for viewing on my site.',
    released_status_desc:
      "** The project in the Release status is a finished product and is hosted on the client's production server.",
    current_projects: 'Current Projects',

    // Game EN
    game_title: 'Proto-Mass. The Game',
    game_subtitle: 'React-based Pixel-Art Sandbox Game with Indirect Control',
    game_description:
      'Far away on a distant planet inhabited by primitive life forms a small colony of robots accidentally trapped must build, develop and fight only to exist... How far can they go?',
    game_demo: 'Demo App',
    game_git: 'GitHub',
    game_donate: 'Patreon'
  },

  russian: {
    // common RU
    summary: 'Резюме',
    demo: 'Демо',
    released: 'Релиз',
    status: 'Статус',
    project_desc: 'Описание',
    intro: 'Вступление',
    roadmap: 'Путь',
    works: 'Работы',
    contacts: 'Контакты',
    nov: 'Ноябрь',
    dec: 'Декабрь',
    aug: 'Август',

    // Contacts RU
    contact_form: 'Форма обратной связи',
    rate_us: 'Оцените этот сайт',
    or: 'или',
    copy_contacts: 'скопируйте контакты',
    copy_email: 'Копировать email',
    copy_phone: 'Копировать телефон',
    cooperation_ready: 'Всегда готов к взаимовыгодному сотрудничеству.',
    submit: 'Отправить',
    placeholder: 'Ваше сообщение',
    linkedin: 'Моя страница на LinkedIn',
    codecademy: 'Мой профиль на Codecademy',
    github: 'Мой GitHub аккаунт',
    myCV: 'Посмотреть моё резюме',
    message_success_phone: 'Номер телефона успешно скопирован!',
    message_success_email: 'Эл. адрес успешно скопирован!',
    message_success: 'Сообщение успешно отправлено!',
    message_success_recaptcha: 'Вы успешно прошли проверку!',
    message_error: 'Ошибка при отправке!',
    message_error_phone: 'Ошибка при отправке: введите номер телефона!',
    message_error_wrong: 'Что-то пошло не так!',
    message_error_recaptcha: 'Сервер Recaptca не отвечает!',

    // Intro RU
    believe: 'Я верю, что дизайн делает мир лучше',
    my_name: 'Ткачук Захар',
    front_dev: 'фронт-энд разработчик',
    tagline: (
      <span>
        Использование новых технологий, таких как <mark>React</mark> или <mark>Hyperapp</mark>{' '}
        всегда даёт вдохновение. Я предпочитаю нестандартные <mark>UI</mark> и <mark>UX</mark>{' '}
        решения, беря за основу концепции <mark>Material Design</mark>
      </span>
    ),
    what_i_do: 'Что я предлагаю',
    my_offer:
      'Я предлагаю услуги по разработке сайтов под ключ, такие как: разработка дизайна, включая UI/UX дизайн и отрисовку макета, резиновая или адаптивная вёрстка, разработка и поисковая олптимизация сайта. Так же я предоставляю консультации по продвижению и поисковой оптимизации интернет-ресурсов.',
    fav_tech: 'Любимые технологии',

    // Roadmap RU
    step_2009:
      'Я начал изучать CSS, HTML, Joomla CMS а так же основы веб-дизайна и Adobe Photoshop. Вскоре я сделал свой первый заказ - сайт на чистом html + css. Второй сайт я сделал на Joomla',
    step_2011: 'Увлёкся изучением SEO',
    step_2013:
      'Поставил свой первый рекорд: сделав сайт с нуля, вывел в топ-3 в поиске Google за три дня',
    step_2015:
      'К этому времени на моём счету было около 50 выполненых заказов по разработке сайтов на Joomla CMS. Это подтолкнуло меня пойти на курсы по JavaScript',
    step_2016:
      'Был небольшой опыт работы с Angular. Выучил основы рабочего окружения, в т.ч. Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp',
    step_2017: 'Начал изучать React',
    step_2018:
      'Изучил React-router + hystory. Прошел двухмесячный курс Lectrum Redux Intensive, где изучил такие библиотеки: Redux, Redux-Saga, immutable.js, socket.io. Был приятно удивлён появлением Parcel!',
    step_2021:
      'Немного поработал с Getsby и GraphQL. Но позже присоединился к развивающемуся сообществу Svelte и это потрясающе! Это одна из лучших технологий, с которой мне приходилось сталкиваться. Благодаря этому стал лучше понимать SSR.',

    // Works RU
    work_1: 'Игра "Пазлы", JavaScript + Canvas + дизайн',
    work_2: 'Корпоративный сайт, Joomla + дизайн',
    work_3: 'Калькулятор LED панелей, Angular.js + Materialize + дизайн',
    work_4:
      'Система управления тестированием нового поколения для автоматизированных и ручных тестов. React + Mobx',
    work_5: 'Национальный платежный сервис. Angular 8 + Material-UI',
    work_6: 'Интернет-магазин, React + Redux + masonry + дизайн',
    work_7: (
      <span>
        Игра для европейского онлайн-казино{' '}
        <a href="/isoftbet" target="_blank" rel="external">
          iSoftBet
        </a>
        , которая вышла в релиз в 2017 году. Тогда же о ней была написана{' '}
        <a href="/isoftbet-article" target="_blank" rel="external">
          статья
        </a>
        . Анимация на Pixi.js + TypeScript
      </span>
    ),
    work_8: 'Аналитический ресурс, JavaScript + jQuery + Materialize + дизайн',
    work_9:
      'Приложение для очистки вашего списка подписок от отказов и пополнения данных о клиентах. Проверяйте своих реальных клиентов одним способом. SvelteKit + SCSS + RSS Feed',
    demo_status_desc: '* Статус Демо означает, что проект доступен для просмотра на моём сайте.',
    released_status_desc:
      '** Проект в статусе Релиз является готовым продуктом и размещён на сервере клиента.',
    current_projects: 'Текущие проекты',

    // Game RU
    game_title: 'Proto-Mass. On-line игра',
    game_subtitle: 'Пиксель-арт песочницца с непрямым управлением на основе React',
    game_description:
      'На далекой планете, населенной примитивными формами жизни, небольшая колония случайно попавших в ловушку роботов, должна строить, развиваться и сражаться для того, чтобы выжить ... Как далеко они могут зайти?',
    game_demo: 'Демо',
    game_git: 'GitHub',
    game_donate: 'Patreon'
  }
};

const translate = (lang, text) => {
  return translations[lang][text];
};

export default translate;
