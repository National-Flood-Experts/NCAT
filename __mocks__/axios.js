const axios = {
    create: jest.fn(() => {
        return {
            get: () => { return Promise.resolve({ data: { ID: 12345678 } }) }
        }
    })
};

module.exports = axios;
