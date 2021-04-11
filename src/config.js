const config ={
    "test": {
        'BACKEND': 'https://spotichat-b.herokuapp.com/',
        'SOCKET': 'https://spotichat-b.herokuapp.com:8080',
        'SPOTIFY': 'https://api.spotify.com/v1'
    }, 
    "development": {
        'BACKEND': 'http://localhost:4000/',
        'SOCKET': 'http://localhost:8080',
        'SPOTIFY': 'https://api.spotify.com/v1'
    }
}
export default config;
