import dayjs from 'dayjs';

export default function shortDate(date) {
    if (!date) {
        return '';
    }
    return dayjs(date).format('DD/MM/YYYY');
}
