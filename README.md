[README.md](https://github.com/user-attachments/files/27552742/README.md)
# Dinner Planner 2026–2027 — Full User Guide

---

## Getting Started

The planner lives entirely in a single HTML file hosted at your GitHub Pages URL. No login, no account, no internet connection required after the page loads. Everything you do is saved automatically to your browser's localStorage, meaning your data persists between visits as long as you're on the same device and browser.

When you first open it, the planner lands on the **current month** automatically. If the current month hasn't been generated yet, it builds one on the spot using the default meal pool.

---

## The Calendar

### How months generate
Each month is built **on demand** the first time you navigate to it. The generator pulls from your active meal pool and follows three rules when placing meals:

- **No back-to-back repeats** — the same meal can never appear on consecutive days
- **One pasta per calendar week** — pasta meals (Spaghetti, Alfredo, and any custom pasta you add) are limited to once per Sun–Sat calendar week. This means if pasta lands on a Wednesday, it can appear again the following Monday since that's a new week
- **Monthly cap** — each meal has a maximum number of times it can appear in a single month (default is 4×). Frozen is exempt from this

Frozen is intentionally excluded from auto-generation entirely — it only ever appears when you manually place it.

### Month status badges
Every month shows one of three states beneath its name:

- **🔒 Past month** — the month is in the past, locked, cannot be regenerated
- **📅 Current month** — locked, cannot be regenerated
- **✨ Future** — not yet locked, shows a **↺ Regenerate month** button

Future months can be freely regenerated before they become the current month. Once a month locks it stays as-is, but you can still manually swap any individual day.

### Navigation
Use the **← →** arrow buttons to move between months. The progress dots at the top show where you are across all 12 months.

---

## Swapping a Meal

Tap or click any meal pill on the calendar to open the swap panel for that day.

### Future and current days
The swap panel shows:

- **🔀 Auto-fill for me** — picks a random valid meal following all the rules
- **🧊 Frozen — quick night!** — always available regardless of any rules, shown as a dedicated button separate from the rest
- **Full meal list** — every active meal shown as a colored pill. Each one displays a count badge (e.g. `2/4`) showing how many times it already appears that month vs. its cap

Meals that are blocked show as faded and unclickable. There are two reasons a meal gets blocked:

- **Conflict** — it would create a back-to-back repeat with the day before or after, or it would put pasta in the same calendar week as another pasta
- **Cap reached** — it's already hit its monthly maximum. Hovering shows which reason applies

Tapping a valid meal swaps it in immediately and a snackbar confirms the change.

### Past days
Any day before today opens with a green notice — **"Past day — no restrictions apply."** Every single meal is shown as available including disabled ones, since you may have actually eaten something that's no longer in your regular rotation. Auto-fill is hidden since there's no point randomizing history. This lets you accurately log what you actually had if you deviated from the plan.

---

## Manage Meals

The **✦ Manage Meals** button opens the meal management panel, which is split into three sections.

### Add a new meal
Fill in:
- **Meal name** — whatever you want to call it
- **Category** — sets the color. Options are Easy night (gray), Hearty (green), Sandwiches & burgers (coral), Tacos/Mexican (amber), or Pasta (purple). Pasta meals follow the one-per-week rule
- **Icon** — pick an emoji from the grid

Once added, the meal appears as an option when you manually swap any day. It's also included in the generation pool for any future months that haven't been generated yet. Already-generated months won't automatically include it unless you hit Regenerate on them.

### Your custom meals
Lists every meal you've added. Each one shows:
- **Disable / Enable toggle** — removes the meal from the generation pool and swap options without permanently deleting it. Useful for taking a break from something. Shows "— not in rotation" when disabled
- **Max per month stepper** — tap − and + to set how many times this meal can appear in a single month (1–10). Changes take effect immediately in the swap panel's count badges
- **Remove button** — permanently deletes the meal

### Default meals
The 11 built-in meals. They work identically to custom meals with the same Disable toggle and monthly cap stepper. Frozen cannot be disabled since it's the always-available fallback. Default meals can't be permanently removed, only disabled.

---

## Recipe Book

The **📖 Recipe Book** button opens a card grid showing every meal in your planner pool.

### Planner meal recipes
Every meal appears as a card. Meals without a recipe show a dashed "+ Add recipe" prompt. Meals with a recipe show their photo (if uploaded), ingredient count, and a clickable link to the recipe source.

Clicking any card opens the **recipe editor** with two columns:

- **Left column — Ingredients** — a dynamic list. Use the + button to add as many ingredients as you need. Tap × on any row to remove it
- **Right column — Photo, link, and notes**
  - Photo is optional. Click the box to upload an image from your device. If a photo is uploaded it shows as a preview; hover to change or remove it
  - Recipe link — paste a URL (e.g. a YouTube video, AllRecipes page, or any website)
  - Notes/description — free text for tips, variations, or a short description

If no photo is uploaded the link and notes expand to fill the full right column naturally.

Hit **Save recipe** to store it. The card in the Recipe Book updates immediately. A **Remove recipe** button appears when editing an existing recipe.

### Standalone recipes
These are recipes that aren't tied to any planner meal — things you cook occasionally but don't want in the dinner rotation. Hit **+ Add recipe** in the Recipe Book header to create one. They show in their own section beneath the planner meals and work identically to meal recipes with the same editor.

---

## Backup & Restore

The **💾 Backup** button opens the backup panel.

### Downloading a backup
Click **Download backup file**. The planner bundles all five data stores into a single timestamped `.json` file:

- Your full generated calendar (all months, all manual swaps)
- Custom meals
- Monthly caps
- Disabled meals
- Recipes (including photos stored as base64)

The filename includes today's date, e.g. `dinner-planner-backup-2026-05-09.json`. Save it anywhere — iCloud, Google Drive, a USB drive, an email to yourself.

### Restoring a backup
Drag a backup `.json` file onto the drop zone or click to browse for it. Before anything is touched a confirmation panel appears showing:
- The date the backup was made
- A summary of what's inside (months, custom meals, recipes)

You can cancel with no changes made. Hit **Restore & reload** to apply it — everything is written back to localStorage and the page refreshes. Your planner comes back exactly as it was when that backup was taken.

### Cross-device workflow
1. On your main device, download a backup
2. Transfer the `.json` file to your other device (AirDrop, Drive, email, etc.)
3. On the other device, open the planner and restore the file

---

## Print / PDF

The **🖨 Print / PDF** button triggers your browser's native print dialog. The planner includes a print stylesheet that hides all buttons, navigation, and the progress bar — only the calendar grid itself prints. From the print dialog choose **Save as PDF** to get a clean, shareable PDF of whichever month is currently displayed.

---

## Reset All

The **↺ Reset All** button clears every generated month entirely. All 12 months revert to ungenerated and will be freshly built one by one as you navigate to them using your current meal pool. Your custom meals, caps, disabled meals, and recipes are **not** affected — only the calendar itself is cleared. A confirmation prompt appears before anything is deleted.

---

## Data & Privacy

Everything lives in your browser's localStorage under the domain the file is hosted on. Nothing is ever sent to a server. If you clear your browser's site data, localStorage is wiped — which is why the backup system exists. Switching browsers or devices starts with a clean slate unless you restore a backup file.
