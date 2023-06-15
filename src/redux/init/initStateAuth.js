export const initStateAuth = {
    jwt: null,
    emptyCookie: null,
    users: [],
    currentUser: {
        _id: '',
        userId: '',
        ip: '',
        ips: [],
        cookies: false,
        isAuth: false,
        isRobot: false, // TODO: true for production!
        lastRobotCheck: '',
        lastGoogleCheck: '',
        lastSignInTime: '',
        lastSignOutTime: '',
        registerTime: '',
        rememberMe: false,
        name: 'Guest',
        email: '',
        subject: '',
        message: '',
        tgMessage: '',
        pass: '',
        system: {
            browser: {
                name: '',
                version: ''
            },
            os: {
                name: '',
                version: '',
                versionName: ''
            },
            platform: {
                type: ''
            },
            engine: {
                name: ''
            }
        },
        lang: 'english',
        role: 'guest', // admin, user, guest
        like: false
    }
};
