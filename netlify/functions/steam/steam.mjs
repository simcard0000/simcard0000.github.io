export default async (request, context) => {
    const api_key = Netlify.env.get("STEAM_KEY");
    const username = Netlify.env.get("STEAM_NAME")
    const response = await fetch("https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json&key=" + api_key + "&steamid=" + username)
    const response_json = await response.json();
    return new Response(response_json);
}