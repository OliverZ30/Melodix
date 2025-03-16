var version = "Beta 0.11.2"
function titleDisplay() {
  graphics.push();
  graphics.textFont(fontTitle);
  graphics.textAlign(CENTER, CENTER);
  graphics.textSize(70 * C);
  graphics.noStroke();
  graphics.fill(255);
  graphics.text("MelodiX", -2 * C, -20 * C);
  graphics.textSize(10 * C);
  graphics.textFont(fontRegular);
  graphics.fill(175);
  graphics.text("Version " + version, 0, 35 * C);
  graphics.textSize(15 * C);
  graphics.text("Press any key to start", 0, 55 * C);
  graphics.pop();
}

// ===========
// VERSION LOG
// ===========

// =====
// ALPHA
// =====

/*

Alpha 0.1 - Playable levels
--
Alpha 0.2 - Level Select Menu
---
Alpha 0.3 - Switch from 6k/4k to HD/EZ
Alpha 0.3.1 - Settings / Custom offsets
-----
Alpha 0.4 - Major UI reworks
Alpha 0.4.1 - Customizable speed
Alpha 0.4.2 - Menu music
Alpha 0.4.3 - Varying BG colors for levels
Alpha 0.4.4 - Fixed audio buffer (somewhat)
Alpha 0.4.5 - Title screen
---
Alpha 0.5 - Data storage, UI reworks
Alpha 0.5.1 - Finished all og charts
Alpha 0.5.2 - Maintenance screen
Alpha 0.5.3 - Auto mode
Alpha 0.5.4 - Modified timeframes
---
Alpha 0.6 - Transferred code to Replit
Alpha 0.6.1 - Removed level select sfx (too laggy)

*/

// ====
// BETA
// ====

/*

Beta 0.1 - Finished all og charts (20 charts / 10 lvls)
---
Beta 0.2 - Cover images
---
Beta 0.3 - Audio Visualization
Beta 0.3.1 - More intuitive level select system
Beta 0.3.2 - Modified timeframes (again)
---
Beta 0.4 - Speed Changes (customizable speeds for different notes)
---
Beta 0.5 - Very cool title + intro music
Beta 0.5.1 - Fixed bug where music cannot play in the intro
---
Beta 0.6 - Async music loading at song selection
Beta 0.6.1 - Faster preload
---
Beta 0.7 - Hidden lvl + BGA intro (code)
Beta 0.7.1 - New Level *Fractured Angel (6/11)*
Beta 0.7.2 - New Level *Tiny Fate (5/9)*
Beta 0.7.3 - Hidden Level *Avantgarde (7/12)*
Beta 0.7.4 - New Level *Abatement (5/10)*

---

Beta 0.8 - Endscreen adjustments, pause indicator
Beta 0.8.1 - More endscreen adjustments

---

Beta 0.9 - Mouse controls

---

Beta 0.10 - SHADERS + Hidden level World_Collapse
Beta 0.10.1 - World_Collapse effects

---

Beta 0.11 - Officially transferred code to Github
Beta 0.11.1 - Alignment fix
Beta 0.11.2 - Changed perfect effect color to match lvl background
Beta 0.11.3 - New Level *World of Scarlet (6/11)*

*/

// ===
// 1.0
// ===

/*

*/

/*

Next Steps:

Charts (before 1.0):
DataError (EZ)
Waterfall (EZ)
World of Scarlet (EZ)

Features:
Andrew's music (1.1)
Title screen effects (1.1)
Background image / animation (1.2)
Collections (1.1 / 1.2)
Level sorting (1.1 / 1.2)
One-time data storage codes (1.2)

Possible Improvements:
none yet

Bugs:
None yet

*/
