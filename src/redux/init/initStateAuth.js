export const initStateAuth = {
    users: [],
    currentUser: {
        userId: '',
        ip: '',
        ips: [],
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
        system: {},
        lang: 'english',
        role: 'guest', // admin, user, guest
        like: false
    }
};
