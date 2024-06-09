import I18n from './vendor/i18n';
import { getLocales } from 'expo-localization';

I18n.initAsync = async () => {
  const locale = getLocales();
  I18n.locale = locale ? locale.replace(/_/, '-') : '';
};

export default I18n;
