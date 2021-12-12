/***
 * @author @gagominecraft12
 * This is a whitelist file [do not edit it or else it will break the service.]
*/
var role = addEventListener(content/*:*/(), "click")
var charset = addEventListener(role, "get");

this.charset = "UTF-8-BOM";
var url = new URL();

/***
 * Add pathes to the main ocntent.
 */
url.hostname("./", true);
/*** 
 * Add whitelisted urls for the data.
*/
url.hostname("https://lightspeed.goanimate.com/", true);
url.hostname("https://d3v4eglovri8yt.cloudfront.net/", true);
url.hostname("https://d2bm7x1jqouzel.cloudfront.net/", true);
url.hostname("https://ga.vyond.com/", url.port(400), true);
url.hostname("wss://preview.vyond.com/", false /* The wss may be blacklisted due of viruses and cookie stealing. */);
url.hostname("https://preview.vyond.com/", true);
url.hostname("https://josephcrosmanplays532.github.io/", true);
url.hostname("https://static.vyond.com/", false /* Static is blacklisted due of cookie stealing. */);