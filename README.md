# Universal Highlighter - Chrome Extension

Highlight selected text on any website instantly. Highlights are saved locally using Chrome storage.

## 🧩 Features

- Highlights any text on any website
- Stores highlights locally
- Simple and clean popup UI
- Works across most sites (except restricted pages like `chrome://`)

## 🚀 Installation (Unpacked)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top right corner)
4. Click **"Load unpacked"**
5. Select the `universal_highlighter` folder

## 📂 File Structure

universal_highlighter/
├── manifest.json
├── content.js
├── background.js
├── popup.html
├── icon.png
└── README.md


## 🔐 Permissions

- `<all_urls>` - Allow highlighting on any website
- `storage` - Save highlights
- `activeTab` - Activate only on current tab

## ⚠️ Limitations

- Doesn't work on Chrome internal pages (e.g., `chrome://`)
- Highlights are not persistent on some dynamic websites (requires advanced logic to persist across page changes)

## 📸 Screenshot (Optional)

Add a screenshot of the extension popup or a highlighted web page.

## 📄 License

MIT — free to use and modify.
