// OVERRIDES
// Last updated 2023-09-11

// Arkenfox Prefs

// 2022: DRM
user_pref("media.eme.enabled", false); // Optional hardening
// 2601: prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 0); // Accepted risk, required for 1Password universal fill
// 2651: enable user interaction for security by always asking where to download 
user_pref("browser.download.useDownloadDir", true); // Accepted risk
// 2654: enable user interaction for security by always asking how to handle new mimetypes
user_pref("browser.download.always_ask_before_handling_new_types", false); // Accepted risk
// 2801: Cookies and site data on close
user_pref("network.cookie.lifetimePolicy", 0); // Accepted risk
// 2810 (2811, 2812): Sanitize history on close
user_pref("privacy.sanitize.sanitizeOnShutdown", false); // Accepted risk
// 2811: set/enforce what items to clear on shutdown (if 2810 is true)
user_pref("privacy.clearOnShutdown.history", false); // Accepted risk
// 2820: Sanitize manual
user_pref("privacy.cpd.offlineApps", true); // Accepted risk, visual preference
user_pref("privacy.cpd.cookies", true); // Accepted risk, visual preference
user_pref("privacy.cpd.siteSettings", true); // Accepted risk, visual preference
// 4501: Fingerprinting
user_pref("privacy.resistFingerprinting", false); // Allows darkmode, use 'CanvasBlocker'
// 4504: Letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false); // Accepted risk, don't like letterboxing

// Personal Prefs

// BROWSER
// Bookmarks menu does not close after opening in new tab
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// Keep focus on current tab when opening a new tab from a bookmark folder menu
user_pref("browser.tabs.loadBookmarksInBackground", true);
// Keep focus on current tab when using context menu to open a new tab 
user_pref("browser.search.context.loadInBackground", true);
// Only show 5 results when using the omnibar
user_pref("browser.urlbar.maxRichResults", 5);
// Disable backspace action
user_pref("browser.backspace_action", 2);
// Disable quit shortcut warning
user_pref("browser.warnOnQuitShortcut", false);
// Disable shortcuts suggestions in url bar
user_pref("browser.urlbar.suggest.topsites", false);
// Disable search engine suggestions in url bar
user_pref("browser.urlbar.suggest.engines", false);
// Disable home content (visual)
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
// Clear search suggestion option (visual)
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

// GENERAL
// Disable autoscroll
user_pref("general.autoScroll", false);

// TOOLKIT
// Enable userChrome.css customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// FINDBAR
// Highlight all instances when using find
user_pref("findbar.highlightAll", true);

// LAYOUT
// Enable spellcheck for all fields
user_pref("layout.spellcheckDefault", 2);

// MEDIA
// Always show PIP button
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
// Disable fullscreen warning
user_pref("full-screen-api.warning.delay", -1);
// Disable fullscreen warning timeout
user_pref("full-screen-api.warning.timeout", 0);

// EXTENSIONS
// Disable Screenshots extension
user_pref("extensions.screenshots.disabled", true);
// Disable Pocket extension
user_pref("extensions.pocket.enabled", false);
// Disable address autofill
user_pref("extensions.formautofill.addresses.enabled", false);
// Disable credit card autofill
user_pref("extensions.formautofill.creditCards.enabled", false);

// SIGNON
// Disable 'remember password' prompt
user_pref("signon.rememberSignons", false);
// Disable password generation (visual)
user_pref("signon.generation.enabled", false);
// Disable Firefox Relay (visual)
user_pref("signon.firefoxRelay.feature", "disable");
// Disable breach alerts
user_pref("signon.management.page.breach-alerts.enabled", false);

// TELEMETRY
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
