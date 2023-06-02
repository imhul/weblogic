export const initStateAuth = {
    users: [],
    currentUser: {
        _id: '',
        userId: '',
        ip: '',
        ips: [],
        isAuth: false,
        isRobot: false, // TODO: true for production!
        lastRobotCheck: 0,
        lastGoogleCheck: 0,
        lastSignInTime: 0,
        lastSignOutTime: 0,
        registerTime: 0,
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
