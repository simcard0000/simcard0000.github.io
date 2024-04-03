![active development](https://img.shields.io/badge/active%20dev-yes-brightgreen.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/simcard0000/simcard0000.github.io.svg)
[![W3C Validation - https://validator.nu/](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fsimranthind.me%2F&label=w3c%20check)](https://validator.nu/?doc=https%3A%2F%2Fsimranthind.me%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/702be976-e0b8-4a38-b0e1-9418516fb442/deploy-status)](https://app.netlify.com/sites/silver-crumble-6089ac/deploys)

# simcard0000.github.io
🌃 Simran's personal website!

### About
This is `v4` of my personal website, wherein I also re-uploaded various site files. The largest original part left from previous versions is the project table. This is a handmade site hosted on GitHub (via [GitHub Pages](https://pages.github.com/)) as well as deployed, built, and hosted through [Netlify](https://www.netlify.com/) - a basic architecture diagram is provided below.

![Simran's personal website architecture diagram](https://github.com/simcard0000/simcard0000.github.io/blob/main/assets/personal-site-arch.png)

### Credits
* The star chart on the website is generated via [VirtualSky](https://slowe.github.io/VirtualSky/), a library by [Stuart Lowe](https://github.com/slowe/VirtualSky) (and powered by  [Las Cumbres Observatory](https://lco.global/)).
* The latest game and song information on the website is from [Steam](https://store.steampowered.com/) and [Last.fm](https://www.last.fm/), respectively. Steam has a [Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API) with a function where one can retrieve [recently played games](https://developer.valvesoftware.com/wiki/Steam_Web_API#GetRecentlyPlayedGames_.28v0001.29) from a user. I also listen to music on Spotify, but it was much simpler to connect my Spotify profile to a Last.fm account and then use Last.fm's API to get [current song information](https://www.last.fm/api/show/user.getRecentTracks), rather than use Spotify's API directly.
    * To hide API keys and other sensitive user information that was necessary for using the aforementioned API functions, they were made secrets on Netlify's systems and abstracted away using [Netlify Functions](https://docs.netlify.com/functions/overview/).
* Site iconography was made using [Canva](https://www.canva.com), and the font is [Inter](https://fonts.google.com/specimen/Inter).
* Site inspiration from: [https://www.yihui.work/](https://www.yihui.work/) and [https://kevinnchen.com/](https://kevinnchen.com/).

~

Authors: Simran Thind (@simcard0000)
