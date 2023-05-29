export const initStateAuth = {
    users: [],
    currentUser: {
        userId: '',
        ip: '',
        isAuth: false,
        isRobot: true,
        lastRobotCheck: '',
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
        login: '',
        avatar: '',
        system: {},
        lang: 'english',
        role: 'guest', // admin, user, guest
        like: false
    }
};
