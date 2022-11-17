//import {createPhotos} from './data';
import {getRandomArrayElement, getRandomPositiveInteger} from './util';
import {ID, URLS, DESCRIPTION, SIMILAR_PHOTO_COUNT} from './data';

const createPhoto = () => ({
  id: getRandomArrayElement(ID),
  url: getRandomArrayElement(URLS),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPhotos = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

//createPhotos();


// Функция checkStringLength для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

// задание 3
function getRandomIntInclusive(min, max) {
  if (min > 0 && !isNaN(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}

//getRandomIntInclusive(1,10);

function getStringLength (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  }else{
    return false;
  }
}

//getStringLength('Привет',10);
