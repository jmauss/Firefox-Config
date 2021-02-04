// Config file for Mozilla Firefox

// BROWSER
// Bookmarks menu does not close after opening in new tab
user_pref("browser.bookmarks.openInTabClosesMenu",	false);

// Keep focus on current tab when opening a new tab from the bookmarks bar
user_pref("browser.loadBookmarksInBackground",		true);

// Keep focus on current tab when opening a new tab from a bookmark folder menu
user_pref("browser.tabs.loadBookmarksInBackground",     true);

// Keep focus on current tab when using context menu to open a new tab 
user_pref("browser.search.context.loadInBackground",	true);

// Only show 5 results when using the omnibar
user_pref("browser.urlbar.maxRichResults",		5);

// Do not display a shortened URL
user_pref("browser.urlbar.trimURLs",			false);

// Set minimum tab width
user_pref("browser.tabs.tabMinWidth",                   100);

// Disable backspace action
user_pref("browser.backspace_action",                   2);

// Set about:blank color (macOS)
//user_pref("browser.display.background_color", "#444546");

// Set about:blank color (Linux)
// user_pref("browser.display.background_color", "#2D2D2D");

// Enable userChrome.css customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",    true);

// NETWORK
// Show punycode in domain names
user_pref("network.IDN_show_punycode", 			true);

// FINDBAR
// Highlight all instances when using find
user_pref("findbar.highlightAll",			true);

// LAYOUT
// Prevent space after word from being selected
user_pref("layout.word_select.eat_space_to_next_word", 	false);

// Enable spellcheck for all fields
user_pref("layout.spellcheckDefault",                   2);

// MEDIA
// Always show PIP button
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show",    true);

// Disable fullscreen warning
user_pref("full-screen-api.warning.delay",              -1);

// Disable fullscreen warning timeout
user_pref("full-screen-api.warning.timeout",            0);

// EXTENSIONS
// Disable Screenshots extension
user_pref("extensions.screenshots.disabled",		true);

// Disable Pocket extension
user_pref("extensions.pocket.enabled",			false);

// SECURITY
// Enable http warning text
user_pref("security.insecure_connection_text.enabled",	true);

// Enable http warning icon
user_pref("security.insecure_connection_icon.enabled",	true);

// TELEMETRY
user_pref("browser.ping-centre.telemetry",                         false);
user_pref("toolkit.telemetry.archive.enabled",                     false);
user_pref("toolkit.telemetry.bhrPing.enabled",                     false);
user_pref("toolkit.telemetry.enabled",                             false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled",           false);
user_pref("toolkit.telemetry.newProfilePing.enabled",              false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun",            false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled",          false);
user_pref("toolkit.telemetry.unified",                             false);
user_pref("toolkit.telemetry.updatePing.enabled",                  false);
user_pref("experiments.enabled",                                   false);
user_pref("datareporting.healthreport.uploadEnabled",              false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry",    false);
user_pref("browser.newtabpage.activity-stream.telemetry",          false);
user_pref("extensions.screenshots.upload-disabled",                true);
