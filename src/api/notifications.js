/** @format */

import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/metroui.scss';

function showMessageUserNoty(variant, text) {
    new Noty({
        theme: 'metroui',
        type: variant,
        text: text,
        timeout: 3000,
        layout: 'topRight',
    }).show();
}
export default showMessageUserNoty;
