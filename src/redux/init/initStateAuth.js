export const initStateAuth = {
    users: [],
    currentUser: {
        userId: '',
        ip: '',
        isAuth: false,
        isRobot: false, // TODO: true for production!
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
        avatar: '',
        system: {},
        lang: 'english',
        role: 'guest', // admin, user, guest
        like: false
    }
};
