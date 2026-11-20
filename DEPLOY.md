# Put the Block Drop website online (free, ~10 minutes)

This folder is your game's whole website:

| File | What it's for |
|---|---|
| `index.html` | Home page with screenshots and store buttons |
| `privacy.html` | **Privacy policy**, required by Apple, Google and AdMob |
| `support.html` | **Support page**, required by Apple (FAQ + contact email) |
| `app-ads.txt` | Proves to ad buyers that you own the app. AdMob checks it; without it you earn less |
| `site.js` | Where you paste your store links after launch |
| `404.html`, `site.css`, `img/` | Page-not-found page, styling, images |

---

## Step 1: Fill in your details (2 minutes)

Open these files in any text editor (Notepad, TextEdit, VS Code) and use find & replace:

| Find | Replace with | In files |
|---|---|---|
| `YOUR-EMAIL@example.com` | your support email | `privacy.html`, `support.html` |
| `YOUR NAME` | your name or company | `privacy.html` |
| `pub-0000000000000000` | your AdMob publisher ID (AdMob › Settings › Account information) | `app-ads.txt` |

> Tip: make a free email just for the game (e.g. blockdropgame@gmail.com) so your personal address isn't public.

## Step 2: Create the site on GitHub Pages

1. Sign up at **github.com** (free). **Your username becomes your web address:** username `angelogames` → `https://angelogames.github.io`.
2. Click **+** (top right) › **New repository**.
3. Name it **exactly** `YOUR-USERNAME.github.io` (e.g. `angelogames.github.io`). Set it to **Public**, then click **Create repository**.

   ⚠️ **The name matters.** AdMob only checks `app-ads.txt` at the *root* of your site. A repository with any other name puts the site at `…github.io/repo-name/`, and AdMob won't find the file.

4. On the new repository page, click **uploading an existing file**.
5. Open the `website` folder on your computer, select **everything inside it** (all files plus the `img` folder; select the contents, not the `website` folder itself) and drag it into the browser.
6. Click **Commit changes**.
7. Go to **Settings › Pages**. Under *Build and deployment*, set Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**, then click **Save**.
8. Wait 1–2 minutes, then open these three links. All three must load:
   - `https://YOUR-USERNAME.github.io`
   - `https://YOUR-USERNAME.github.io/privacy.html`
   - `https://YOUR-USERNAME.github.io/app-ads.txt` (shows one line of text)

## Step 3: Use the links in the stores

| Where | Field | Link |
|---|---|---|
| Google Play Console | Privacy policy | `https://YOUR-USERNAME.github.io/privacy.html` |
| Google Play Console | Store settings › Website | `https://YOUR-USERNAME.github.io` |
| App Store Connect | Privacy Policy URL | `https://YOUR-USERNAME.github.io/privacy.html` |
| App Store Connect | Support URL | `https://YOUR-USERNAME.github.io/support.html` |
| App Store Connect | Marketing URL (optional) | `https://YOUR-USERNAME.github.io` |

After your app is live and linked to its store listing in AdMob, go to **AdMob › Apps › app-ads.txt** and click **Check for updates**. Verification can take up to 24 hours.

## Step 4: After launch, turn on the store buttons

On GitHub, open `site.js` › click the ✏️ pencil › paste your two store links between the quotes:

```js
appStore: 'https://apps.apple.com/app/id1234567890',
googlePlay: 'https://play.google.com/store/apps/details?id=com.yourname.blockdrop',
```
Click **Commit changes**. The "Coming soon" buttons switch to real download buttons within a minute or two.

## Changing anything later
Open the file on GitHub › ✏️ › edit › **Commit changes**. The site updates within a minute or two.

## Optional: your own domain (e.g. blockdrop.app)
Buy a domain (~$10–15/year), then in **Settings › Pages › Custom domain** enter it and follow GitHub's DNS instructions. If you switch domains *after* launch, update the website URL in both stores so AdMob checks app-ads.txt in the right place.
