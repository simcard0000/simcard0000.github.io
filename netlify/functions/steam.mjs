export default async (request, context) => {
    const api_key = Netlify.env.get("STEAM_KEY");
    const username = Netlify.env.get("STEAM_NAME")
    const response = await fetch("https://partner.steam-api.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=" + api_key + "&input_json={\"steamid\":" + username + ", \"count\":1}")
    return response;
}