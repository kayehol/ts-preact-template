import { useQuery } from "react-query";
import { getTopArtists } from "./getTopArtists";



export const getTagsAndArtists = async () => {
    const { isLoading, isError, data, error} = useQuery('artists', getTopArtists);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error.message} </span>;
    }

    const results = data.map(async artist => {
        // const params = {
        //     method: 'artist.gettoptags',
        //     artist: artist.name,
        //     api_key: process.env.LASTFM_API_KEY,
        //     format: 'json'
        // }
        const response = useQuery('tags', getTags);
        const tagName = response.data.toptags.tag[0].name

        return tagName
    })
    const tagsList = await Promise.all(results)

    const listArtists = data.map(artist => {
        return artist['@attr'].rank + '. ' + artist.name
    })

    const formattedArtists = listArtists.join(' | ')
    const formattedTags = 'tags: ' + tagsList.join(', ')

    const statusPost = emoji.get('musical_keyboard') + emoji.get('notes') + emoji.get('man_dancing') + 
                        '\n' + formattedArtists + '\n' + formattedTags + '\n'
    
    return statusPost

    return { tags: tagsList, artists: topArtists }
}
