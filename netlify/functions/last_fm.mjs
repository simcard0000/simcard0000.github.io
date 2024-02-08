export default async (request, context) => {
    const api_key = Netlify.env.get("LAST_FM_KEY");
    const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=SuperNova_-_&limit=1&api_key=" + api_key + "&format=json")
    return response;
}