export const initStateUI = {
    cookiesModalOpen: false,
    cookiesAllowed: undefined,
    cookiesAllowebByUser: undefined,
    likes: 0,
    location: 'Loading', // Loading, Home, Game, Folio
    active: null,
    safe: null,
    cursorPos: {},
    trelloModalVisible: false,
    lang: 'english',
    isUserLangSelected: false,
    authFormType: '', // login | reg | forgot | change_pass
    tgMessage: '',
    isContactFormFilled: false,
    isFuturesOpen: false,
    isMenuOpen: false,
    emailForm: {},
    smsForm: {},
    contactMethod: 'Telegram', // Telegram, Email, SMS
    tip: '',
    loaded: false,
    initialized: false,
    heroStyle: {},
    hero: {
        ukrainian: [
            'Т',
            'к',
            'а',
            'ч',
            'у',
            'к',
            ' ',
            ' ',
            ' ',
            'З',
            'а',
            'х',
            'а',
            'р'
        ],
        english: [
            'T',
            'k',
            'a',
            'c',
            'h',
            'u',
            'k',
            '',
            'Z',
            'a',
            'k',
            'h',
            'a',
            'r'
        ]
    }
};
