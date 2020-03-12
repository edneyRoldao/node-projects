export default () => {
    return {
        env: 'dev',
        port: 3000,
        databaseUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-q8fqh.mongodb.net/test?retryWrites=true&w=majority`
    }
}


