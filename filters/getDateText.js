import shortDate from './date';

export default function getDateText(code) {
    let dateText = '';

    if (code.startDate) {
        dateText += `À partir du ${ shortDate(code.startDate) } `;
    }

    if (code.endDate) {
        dateText += `Jusqu'au ${ shortDate(code.endDate) }`;
    }

    return dateText;
}
