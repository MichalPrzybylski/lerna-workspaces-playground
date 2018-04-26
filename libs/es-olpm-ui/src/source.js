import { esCommonUiFunction } from 'es-common-ui';
import { esGlobalUiFunction } from 'es-global-ui';

export function esOlpmLog() {
    console.log('ES-OLPM-UI -> es-common-ui', esCommonUiFunction());
    console.log('ES-OLPM-UI -> es-global-ui', esGlobalUiFunction());
}