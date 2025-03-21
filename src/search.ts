import {i18n} from './main';
import {LanguageString} from './query';

export const filterLanguageStrings = (languageStrings: LanguageString[]) => {
  const preferredLiterals = languageStrings.filter(literal => literal.language === i18n.global.locale);
  if (preferredLiterals.length > 0) {
    return preferredLiterals.map(literal => literal.value);
  }

  return languageStrings.map(literal => literal.value);
}
