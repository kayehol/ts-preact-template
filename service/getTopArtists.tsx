
const LASTFM_USER = 'KayeVampire';
const LASTFM_API_KEY = '9a6563529cecf9e5107767904055e399';
const LASTFM_API_ROOT = 'http://ws.audioscrobbler.com/2.0/';

export const getTopArtists =  async () => {
    const params = {
        method: 'user.gettopartists',
        user: LASTFM_USER,
        period: '7day',
        limit: 5,
        api_key: LASTFM_API_KEY,
        format: 'json'
    }
    if (!LASTFM_API_ROOT || !LASTFM_API_KEY) {
        throw new Error('Could not get environment variables')  
    } 

    const response = await fetch(LASTFM_API_ROOT, params);
    if (!response.ok) {
        throw new Error('Error on getting top artists');
    }
    return response.json()
    // const artists = response.data.topartists.artist
    // return artists
}