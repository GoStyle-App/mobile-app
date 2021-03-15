export default function getPromotionalCodes() {
    const url = 'http://goreduc.herokuapp.com/api/promotional_codes';
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json['hydra:member'])
        .catch((error) => console.error(error));
}
