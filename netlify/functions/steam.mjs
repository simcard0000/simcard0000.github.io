export default async (request, context) => {
    const api_key = Netlify.env.get("STEAM_KEY");
    const username = Netlify.env.get("STEAM_NAME")
    const response = await fetch("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" + api_key + "&steamid=" + username + "&format=json")
    return response;
}