export const setUser = (user) => ({
    type: 'SET_USER',
    payload: {
        username: user.username,
    },
});