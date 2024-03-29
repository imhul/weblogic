import React from 'react';

const translations = {
    english: {
        // common EN
        keep_clicking: 'Keep clicking anywhere!',
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
        apr: 'Apr',
        parts: 'parts',
        fps: 'fps',
        init_failed:
            'Unfortunately, we could not connect to the server, so some features may not be available. Please try again later or refresh the page.',

        // form EN
        edit_success_message: 'Edit success!',
        no_changes_message: 'No changes to save!',
        save: 'Save',
        settings: 'Settings',
        register_success_message: 'Registration success!',
        login_success_message: 'Login success!',
        invalid_pass_message: 'Invalid password!',
        invalid_email_message: 'Invalid email!',
        invalid_pass_or_email_message: 'Invalid password or email!',
        yes: 'Yes',
        cancel: 'Cancel',
        cookies_use_success_message: 'Cookies is applied!',
        cookies_policy: 'Cookies Policy',
        cookies_desk:
            'This site uses cookies to offer you a better browsing experience. Find out more on our',
        user_name_title: 'You entered as',
        forgot_form: 'Forgot Password?',
        change_profile: 'Change Profile',
        change_name: 'Change Name',
        change_email: 'Change email',
        change_pass: 'Change Password',
        change_name_title: 'Change Name',
        change_email_title: 'Change email',
        change_pass_title: 'Change Password',
        remember_me: 'Remember me',
        two_pass_not_match_message: 'Passwords do not match!',
        pass_required_message: 'Please enter password!',
        email_required_message: 'Please enter email!',
        name_required_message: 'Please enter name!',
        new_name_placeholder: 'Enter new name',
        new_name_required_message: 'Please enter new name!',
        pass: 'Password',
        new_pass: 'New Password',
        old_pass: 'Old Password',
        repeat_pass: 'Confirm Password',
        repeat_new_pass: 'Repeat New Password',
        new_pass_required_message: 'Please enter new password!',
        old_pass_required_message: 'Please enter old password!',
        confirm: 'Confirm',
        confirm_pass_required_message: 'Please confirm password!',
        confirm_new_pass_required_message:
            'Please confirm new password!',
        lang_title: 'Language selection',
        toolbar_heading: 'Profile',
        loading: 'Loading...',
        like_btn: 'Tnx!',
        reg_form: 'Registration',
        reg_submit: 'Register',
        login_form: 'Login Form',
        login_submit: 'Login',
        logout: 'Logout',
        logout_question: 'Are you sure you want to log out?',
        menu_heading: 'Menu',
        contact_method: 'Contact Method',
        tip_heading: 'ChatGPT Tip of the Day',
        tip_like: 'Liked it?',
        tip_await: 'Wait please',
        tip_request:
            'Hello. Please give the advice of the day, as if you were a Buddhist guru, only without the preface that you are an ordinary artificial intelligence and without a religious context.',

        // Contacts EN
        contact_form: 'Contact Form',
        rate_us: 'Rate this page',
        or: 'or',
        copy_contacts: 'copy contacts',
        copy_email: 'Copy email to clipboard',
        copy_phone: 'Copy phone to clipboard',
        cooperation_ready:
            'Always ready for mutually beneficial cooperation.',
        submit: 'Submit',
        placeholder: 'Your Message',
        linkedin: 'My personal LinkedIn Page',
        codecademy: 'My Codecademy Profile',
        github: 'My personal GitHub',
        myCV: 'My CV',
        name_placeholder: 'Your Name',
        email_placeholder: 'Your Email',
        select_subject_placeholder: 'Select the subject',
        custom_subject_placeholder: 'Custom subject',
        message_email_already_exists: 'Email already exists!',
        message_invalid_email: 'The input is not valid email',
        message_required_email: 'Email is required',
        message_required_name: 'Name is required',
        message_required_subject: 'Subject is required',
        message_success_phone: 'Phone number successfully copied!',
        message_success_email_copy:
            'Email address successfully copied!',
        message_success: 'Message sent successfully!',
        message_success_recaptcha:
            'You have successfully passed the verification!',
        message_error: 'Error while sending!',
        message_error_phone:
            'Error while sending: Enter the phone number!',
        message_error_wrong: 'Something wrong!',
        message_error_recaptcha: 'Recaptca server is not response!',
        message_retry_recaptcha:
            'Recaptcha needs to be checked again...',

        // Intro EN
        believe: 'I believe that design makes the world better',
        my_name: 'Tkachuk Zakhar',
        front_dev: 'front-end developer',
        tagline: (
            <span>
                Using new technologies, such as <mark> React </mark>{' '}
                or <mark> Svelte </mark> always gives inspiration. I
                prefer non-standard <mark>UI</mark> and{' '}
                <mark>UX</mark> solutions, taking as a basis the
                concept of <mark>Material Design</mark> and{' '}
                <mark>Neumorphism</mark>
            </span>
        ),
        what_i_do: 'What I do?',
        my_offer:
            'I offer turnkey websites development (including but not limited to): UI/UX design and mockup drawing, responsive and adaptive design. I also advise on promotion and search engine optimization of web resourses',
        fav_tech: 'Favorite technologies',

        // Roadmap EN
        step_2008:
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
            'Learned React-router + history. Started Lectrum 2 month Redux Intensive courses and learned next libraries: Redux, Redux-Saga, immutable.js, socket.io. Was very pleasantly surprised by the Parcel!',
        step_2020: 'I had to work with Angular 8 for six months',
        step_2021:
            "Did a bit of work with Getsby and GraphQL. But later I joined the growing Svelte community as well as SvelteKIt and it's amazing! This is one of the best technologies I've come across. Thanks to this, I have a better understanding of SSR.",
        step_2023: (
            <>
                Still working with{' '}
                <a
                    href="https://svelte.dev/"
                    title="Svelte"
                    rel="noreferer noopener"
                    target="_blank"
                >
                    Svelte
                </a>{' '}
                and it's great. After an in-depth study, I can say
                with confidence that this is a top!
            </>
        ),

        // Works EN
        work_1: 'Puzzle game, JavaScript + Canvas + design',
        work_2: 'Corporate project, Joomla + design',
        work_3: 'LED-screen calculator, Angular.js + Materialize + design',
        work_4: 'Next-gen test management system for automated & manual tests. React + Mobx',
        work_5: 'National payment service. Angular 8 + Material-UI',
        work_6: 'e-commerce project, React + Redux + masonry + design',
        work_7: (
            <span>
                The iSoftBet European online casino game, which was
                released in 2017. Then an article on the
                www.softgamings.com was written about her. Animation
                on Pixi.js + TypeScript
            </span>
        ),
        work_8: 'Analytical resource, JavaScript + jQuery + Materialize + design',
        work_9: 'An application to clean your subscription list from bounces, and enrich data with customers. Verify your real customers in one way. SvelteKit + SCSS + RSS Feed',
        demo_status_desc:
            '* Demo status means that the project is available for viewing on my site.',
        released_status_desc:
            "** The project in the Release status is a finished product and is hosted on the client's production server.",
        current_projects: 'Current Projects',

        // Game EN
        game_title: 'Proto-Mass. The Game',
        game_subtitle:
            'React-based Pixel-Art Sandbox Game with Indirect Control',
        game_description:
            'Far away on a distant planet inhabited by primitive life forms a small colony of robots accidentally trapped must build, develop and fight only to exist... How far can they go?',
        game_demo: 'Demo App',
        game_git: 'GitHub',
        game_donate: 'Patreon'
    },

    ukrainian: {
        // common UA
        keep_clicking: 'Продовжуйте клікати будь-де!',
        summary: 'Резюме',
        demo: 'Демо',
        released: 'Реліз',
        status: 'Статус',
        project_desc: 'Опис',
        intro: 'Вступ',
        roadmap: 'Шлях',
        works: 'Роботи',
        contacts: 'Контакти',
        nov: 'Листопад',
        dec: 'Грудень',
        aug: 'Серпень',
        apr: 'Квітень',
        parts: 'частин',
        fps: 'кадрів/с',
        init_failed:
            'Нажаль не вдалося підключитися' +
            ' до серверу, тому деякі функції можуть' +
            ' бути недоступні. Спробуйте ще раз' +
            ' пізніше, або оновіть сторінку.',

        // form UA
        edit_success_message: 'Дані успішно змінені!',
        no_changes_message:
            'Ви не вибрали жодного поля для редагування!',
        save: 'Зберегти',
        settings: 'Налаштування',
        register_success_message: 'Ви успішно зареєструвалися!',
        login_success_message: 'Ви успішно увійшли!',
        invalid_pass_message: 'Невірний пароль!',
        invalid_email_message: 'Невірний email!',
        invalid_pass_or_email_message: 'Невірний email або пароль!',
        yes: 'Так',
        cancel: 'Скасувати',
        cookies_use_success_message:
            'Використання cookies застосовано!',
        cookies_policy: 'Політика Cookies',
        cookies_desk:
            'Цей сайт використовує файли cookie, щоб запропонувати вам кращий досвід перегляду. Дізнайтеся більше на моїй сторінці',
        user_name_title: 'Ви війшли як',
        forgot_form: 'Забули пароль?',
        change_profile: 'Змінити профіль',
        change_name: 'Змінити ім`я',
        change_email: 'Змінити email',
        change_pass: 'Змінити пароль',
        change_name_title: 'Зміна імені',
        change_email_title: 'Зміна email',
        change_pass_title: 'Зміна паролю',
        remember_me: 'Запам`ятати мене',
        two_pass_not_match_message: 'Паролі не співпадають!',
        pass_required_message: 'Будь ласка, введіть пароль!',
        email_required_message: 'Будь ласка, введіть email!',
        name_required_message: 'Будь ласка, введіть ім`я!',
        new_name_placeholder: 'Введіть нове ім`я',
        new_email_placeholder: 'Введіть новий email',
        new_name_required_message: 'Будь ласка, введіть нове ім`я!',
        pass: 'Пароль',
        new_pass: 'Новий ароль',
        old_pass: 'Старий пароль',
        repeat_pass: 'Підтвердіть пароль',
        repeat_new_pass: 'Підтвердіть новий пароль',
        old_pass_required_message:
            'Будь ласка, введіть старий пароль!',
        new_pass_required_message:
            'Будь ласка, введіть новий пароль!',
        confirm: 'Підтвердити',
        confirm_pass_required_message:
            'Будь ласка, підтвердіть пароль!',
        confirm_new_pass_required_message:
            'Будь ласка, підтвердіть новий пароль!',
        lang_title: 'Вибір мови',
        toolbar_heading: 'Профіль',
        loading: "Йде з'єднання...",
        like_btn: 'Дякую!',
        reg_form: 'Реєстрація',
        reg_submit: 'Зареєструватися',
        login_form: 'Вхід',
        login_submit: 'Увійти',
        logout: 'Вихід',
        logout_question: 'Ви впевнені, що бажаєте вийти?',
        menu_heading: 'Меню',
        contact_method: 'Спосіб зв`язку',
        tip_heading: 'Порада дня від ChatGPT',
        tip_like: 'Cподобалось?',
        tip_await: 'Зачекайте, будь ласка',
        tip_request:
            'Привіт. Надай, будь ласка, пораду дня, так, наче ти буддійський гуру, тільки без передслівья про те, що ти звичайний штучний інтелект і без релігійного контексту.',

        // Contacts UA
        contact_form: "Форма зворотнього зв'язку",
        rate_us: 'Оцініть цей сайт',
        or: 'або',
        copy_contacts: 'скопіюйте контакти',
        copy_email: 'Скопіювати email',
        copy_phone: 'Скопіювати телефон',
        cooperation_ready:
            'Завжди готовий до взаємовигідного співробітництва.',
        submit: 'Відправити',
        placeholder: 'Ваше повідомлення',
        linkedin: 'Моя сторінка на LinkedIn',
        codecademy: 'Мій профіль на Codecademy',
        github: 'Мій GitHub акаунт',
        myCV: 'Подивитися моє резюме',
        name_placeholder: 'Ваше ім`я',
        email_placeholder: 'Ваш email',
        select_subject_placeholder: 'Оберіть тему',
        custom_subject_placeholder: 'Власна тема',
        message_email_already_exists: 'Такий email вже існує!',
        message_invalid_email: 'Введіть, будь ласка, коректний email',
        message_required_email: 'Введіть, будь ласка, email',
        message_required_name: 'Введіть, будь ласка, ім`я',
        message_required_subject: 'Оберіть, будь ласка, тему листа',
        message_success_phone: 'Номер телефону успішно скопійовано!',
        message_success_email_copy: 'Эл. адресу успішно скопійовано!',
        message_success: 'Повідомлення успішно скопійовано!',
        message_success_recaptcha: 'Вы успішно пройшли перевірку!',
        message_error: 'Помилка при відправці!',
        message_error_phone:
            'Помилка при відправці: введіть номер телефону!',
        message_error_wrong: 'Щось пішло не так!',
        message_error_recaptcha: 'Сервер Recaptca не відповідає!',
        message_retry_recaptcha:
            'Потрібно повторити перевірку Recaptca...',

        // Intro UA
        believe: 'Вірю, що дизайн робить світ кращим',
        my_name: 'Ткачук Захар',
        front_dev: 'фронтенд разробник',
        tagline: (
            <span>
                Використання новых технологій, таких як{' '}
                <mark>React</mark> або <mark>Svelte</mark> завжди
                надихає. Я надаю перевагу нестандартним{' '}
                <mark>UI</mark> та <mark>UX</mark> рішенням, беручи за
                основу концепції{' '}
                <mark>неоморфізму та Material Design</mark>
            </span>
        ),
        what_i_do: 'Що я пропоную',
        my_offer:
            'Я пропоную послуги з розробки веб-додатків та користувацьких інтерфейсів (UI/UX) з резиновою версткою. Також я пропоную послуги з пошукової оптимізації та просування інтернет-ресурсів, в тому числі консультативні.',
        fav_tech: 'Улюблені технології',

        // Roadmap UA
        step_2008:
            'Почав вивчати CSS, HTML, Joomla CMS а також основи веб-дизайну та Adobe Photoshop. Незабаром я зробив своє перше замовлення - сайт на чистому html+css. Друге замовлення я зробив на Joomla',
        step_2011:
            'Серйозно захопився вивченням SEO. Тоді ж зацікавився UI/UX дизайном',
        step_2013:
            'Поставив свій перший рекорд: зробивши сайт з нуля, вивів у топ-3 у пошуку Google за три дні',
        step_2015:
            'На цей час на моєму рахунку було близько 50 виконаних замовлень щодо розробки сайтів на Joomla CMS. Це підштовхнуло мене піти на курси JavaScript',
        step_2016:
            'Був невеликий досвід роботи з Angular 2. Вивчив основи робочого оточення, у т.ч. Terminal, Yarn, Git, Jira, GitBash, Grunt, Gulp',
        step_2017: 'Почав вивчати React',
        step_2018:
            'Вивчив React-router + history. Пройшов двомісячний курс Lectrum Redux Intensive, де вивчив такі бібліотеки як Redux, Redux-Saga, immutable.js, socket.io. Був приємно вражений знайомством із Parcel і це теж дуже крута річ!',
        step_2020: 'Довелося півроку попрацювати з Angular 8',
        step_2021:
            'Трохи попрацював із Getsby та GraphQL. Але пізніше приєднався до спільноти Svelte, що розвивається, і це приголомшливо! Це одна з найкращих технологій, з якою мені доводилося стикатися. Завдяки цьому став краще розуміти SSR.',
        step_2023: (
            <>
                Все ще працюю зі{' '}
                <a
                    href="https://svelte.dev/"
                    title="Svelte"
                    rel="noreferer noopener"
                    target="_blank"
                >
                    Svelte
                </a>{' '}
                і це прекрасно. Після поглибленого вивчення можу
                сказати впевнено, що це топ!
            </>
        ),

        // Works UA
        work_1: 'Гра "Пазли", JavaScript + Canvas + дизайн',
        work_2: 'Корпоративний сайт, Joomla + дизайн',
        work_3: 'Калькулятор LED панелей, Angular.js + Materialize + дизайн',
        work_4: 'Система управління тестуванням нового покоління для автоматизованих та ручних тестів. React + Mobx',
        work_5: 'Національный платіжный сервіс. Angular 8 + Material-UI',
        work_6: 'Інтернет-магазин, React + Redux + masonry + дизайн',
        work_7: (
            <span>
                Гра для європейского онлайн-казино iSoftBet, котра
                вийшла в реліз у 2017 році. Тоді ж про неї була
                опублікована стаття на сайті www.softgamings.com.
                Анімація на Pixi.js + TypeScript
            </span>
        ),
        work_8: 'Аналітичний ресурс, JavaScript + jQuery + Materialize + дизайн',
        work_9: 'Додаток для очищення вашого списку підписок від відмов та поповнення даних про клієнтів. Перевіряйте своїх реальних клієнтів одним способом. SvelteKit + SCSS + RSS Feed',
        demo_status_desc:
            '* Статус Демо означає, що проект можливо переглянути на моєму сайті, натиснувши на нього.',
        released_status_desc:
            '** Проект в статусі Реліз є готовым продуктом і разміщений на хостингу клиента.',
        current_projects: 'Поточні проекти',

        // Game UA
        game_title: 'Proto-Mass. On-line гра',
        game_subtitle:
            'Піксель-арт пісочниця с непрямим управлінням на основі React. На даний час ведеться паралельна розробка на Svelte.',
        game_description:
            'На далекій планеті, населеній примітивними формами життя, невелика колонія роботів, що випадково потрапили в пастку, повинна будувати, розвиватися і боротися, щоб вижити... Як далеко це може зайти?',
        game_demo: 'Демо',
        game_git: 'GitHub',
        game_donate: 'Patreon'
    }
};

const translate = (lang, text) => translations[lang][text];

export default translate;
