export default {
    buildQueryString: function (parameters) {
        let query = '?';

        Object.keys(parameters)
            .forEach(key => {
                query += `${key}=${parameters[key]}&`;
            });

        return query.slice(0, -1);
    }
}
