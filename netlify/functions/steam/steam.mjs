export default async (request, context) => {
    const api_key = Netlify.env.get("STEAM_KEY");
    const username = Netlify.env.get("STEAM_NAME")
    const response = await fetch("https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json&key=" + api_key + "&steamid=" + username)
    const response_json = await response.json();
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    const options = {
        status: 200,
        statusText: "OK",
        headers
    }
    return new Response(JSON.stringify(response_json), options);
}