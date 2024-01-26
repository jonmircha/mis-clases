import { showUserInfo } from "./modules/api-github.js";
import { showPokemons } from "./modules/api-pokemons.js";
import { tvMazeSearch } from "./modules/api-tv-maze.js";
import { lastPostsWP } from "./modules/api-wordpress.js";
import { contactFormSend } from "./modules/contact-form-send.js";

showUserInfo();
contactFormSend(".contact-form", "jonmircha@gmail.com");
showPokemons();
tvMazeSearch("#search", ".shows");
lastPostsWP("#wp-site", ".wp-posts");
