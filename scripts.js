/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"Tw9KIA67ySytsRpv","label":"School","bookmarks":[{"id":"p6q61oK2pQZcfgS2","label":"email","url":"https://mail.his.se/owa/#path=/mail"},{"id":"He8F89AwDRoD1uhs","label":"canvas","url":"https://his.instructure.com/"},{"id":"7S0Z8OFGiEuUeY9b","label":"his","url":"https://student.his.se/mina-studier/schema/"}]},{"id":"DsZdqufoB6zqSssb","label":"SocialMedia","bookmarks":[{"id":"Rt1chhbHLRbtcZB4","label":"instagram","url":"https://www.instagram.com/"},{"id":"ZzT3zzVLqbbsKyTk","label":"tiktok","url":"https://www.tiktok.com/"},{"id":"Pm7ZPsCoxLG1ptSy","label":"linkedin","url":"https://se.linkedin.com/"},{"id":"mtcfLz5wIw0s2QZ1","label":"whatsapp","url":"https://web.whatsapp.com/"}]},{"id":"wlz9wMUJLlfNfgDa","label":"Personal","bookmarks":[{"id":"rC87ha3WoQctUscX","label":"gmail","url":"https://mail.google.com/mail/u/0/#inbox"},{"id":"BjL1jCAK2xJI6kyo","label":"virustotal","url":"https://www.virustotal.com/gui/home/upload"},{"id":"emWMRbnwNduYAYd9","label":"drive","url":"https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"},{"id":"qwkza1lwgrfCXzbg","label":"steam","url":"https://store.steampowered.com/"}]},{"id":"jNVmniCYPrOENUV9","label":"AI","bookmarks":[{"id":"CKKpCVbSIACg7BoT","label":"chatgpt","url":"https://chatgpt.com/"},{"id":"JYTkgrqzmDB3FSBO","label":"claude","url":"https://claude.ai/new"},{"id":"pHEjqYDz6Ah1uvgc","label":"deepseek","url":"https://chat.deepseek.com/"},{"id":"mTKCuoTMSSdUhNuU","label":"gemini","url":"https://gemini.google.com/app?hl=sv"}]},{"id":"Zm5uQgDfqOGHG0wp","label":"Work","bookmarks":[{"id":"MgWzpEf7YQmv2S2A","label":"dsh","url":"https://thehub.darksumika.com/"},{"id":"SQUnfQiFzqZ9rjab","label":"mail","url":"https://inbox.purelymail.com/?_task=mail&_mbox=INBOX"},{"id":"odRFnxBE9EbJWaVv","label":"bf","url":"https://store.steampowered.com/app/4218870/Broken_Facade/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()

/**
 * Rotating gif
 */

const gifList = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVmcHp2MDc1NTN2OHl1OWFha3FuNzJsc2JoNnhwMjE3cHo4czl2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UBedJJfaxXHvZyU/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTAyNGJ6emc1ZDdjaTZvZ3Y5aW1ieWo3cHdwYTNuZGNlMjZsY2F1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77XGWy4IRCeRbWg0/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHo0dzV2cjc0ZWs5NXA4ZTd4M3h5dnZzMGs4ZGlicXQ2M2p4NXBheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77XUjQrAVQmf4jFS/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTV2ODYzZWg1cHVoaGM4Zjg2a3k2MGdhdGZrZjEzdjJ0dWF6b3B0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UB117P7KdPnnpNC/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdoYng5NWJrNWp1aXhlYnF3MXN3MTBkZ2FpYWk0bjNoc2dwMDFneCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77XUw1XMVGIxgove/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWo0cHAxdG1zbHZ1MjBrM203ZnhzcTB6b3lyMDQ0cWNqNWFxdDNhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UAYBY07Lv7rgfde/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanlycWU3MHI4MTBsdDYzbDY4NndidzgybHVxNG12bXRrbXo0ZmZvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2RnkvQ7tjhZsBNHq/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3R0ODczaGw5N3ZmM3JzazV1cGtoejc1eWZ6ZzlybDAya3U1ODQzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UB6UhHHcjuzmcyk/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJiY3ltYjE5eGJucWV3MHl4NXU0cHd5NjhwZHMzczE0bmRrYWZtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77Y4x27Rq3ZrrteM/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmJwYjhpMGV0cnJnOWI1NjFreHRlcjRqZjlmY2pmNDhyMTRwN205ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6UB7BJ9cguaRm0cU/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pmcTh0YjNla3Rja3ZlMzJxbHBzeTdsaDYzZXNhOHd6ZHlodG0yeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlFUG5HtdNuH4s/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1maHRhcTdmeW0ycDdmdHB6ZmFhZWxwbHF3bGk3cDBqbzllMmMyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nKwdeLSqQCUhO/giphy.gif",
]

const GIF_ROTATE_INTERVAL_MS = 2 * 60 * 1000 // 2 minutes

const gifImg = document.getElementById("rotating-gif")

const pickRandomGif = currentUrl => {
  if (gifList.length <= 1) return gifList[0]
  let next = currentUrl
  // avoid picking the same gif twice in a row when possible
  while (next === currentUrl) {
    next = gifList[Math.floor(Math.random() * gifList.length)]
  }
  return next
}

const rotateGif = () => {
  if (!gifImg) return
  gifImg.src = pickRandomGif(gifImg.src)
}

if (gifImg) {
  // Set an initial random gif on page load
  gifImg.src = pickRandomGif(null)
  setInterval(rotateGif, GIF_ROTATE_INTERVAL_MS)
}
