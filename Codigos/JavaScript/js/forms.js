import { responsiveTester } from "./modules/responsive-tester.js";
import { searchFilter } from "./modules/search-filter.js";
import { contactFormValidations } from "./modules/contact-form-validations.js";

responsiveTester("#responsive-form");
searchFilter(".card-filter", ".card");
contactFormValidations(".contact-form");
