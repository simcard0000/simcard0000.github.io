export default async (request, context) => {
    const api_key = Netlify.env.get("LAST_FM_KEY");
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=SuperNova_-_&limit=1&extended=1&api_key=" + api_key + "&format=json")
    const response_json = await response.json();
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(response_json)
    };
}