const text = document.querySelector('#text');
const log = document.querySelector('#log');

text.oninput = (event) => {
  log.value = morseTranslator(event.target.value);
};

const morseTranslator = (text) => {
  text = text.toLowerCase().split('');
  const morseText = [];
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
    case 'а':
      morseText.push('•− ');
      break;
    case 'б':
      morseText.push('−••• ');
      break;
    case 'в':
      morseText.push('•-- ');
      break;
    case 'г':
      morseText.push('--• ');
      break;
    case 'д':
      morseText.push('-•• ');
      break;
    case 'е':
      morseText.push('• ');
      break;
    case 'ё':
      morseText.push('• ');
      break;
    case 'ж':
      morseText.push('•••- ');
      break;
    case 'з':
      morseText.push('--•• ');
      break;
    case 'и':
      morseText.push('•• ');
      break;
    case 'й':
      morseText.push('•--- ');
      break;
    case 'к':
      morseText.push('-•- ');
      break;
    case 'л':
      morseText.push('•-•• ');
      break;
    case 'м':
      morseText.push('-- ');
      break;
    case 'н':
      morseText.push('-• ');
      break;
    case 'о':
      morseText.push('--- ');
      break;
    case 'п':
      morseText.push('•--• ');
      break;
    case 'р':
      morseText.push('•-• ');
      break;
    case 'с':
      morseText.push('••• ');
      break;
    case 'т':
      morseText.push('- ');
      break;
    case 'у':
      morseText.push('••- ');
      break;
    case 'ф':
      morseText.push('••-• ');
      break;
    case 'х':
      morseText.push('••••');
      break;
    case 'ц':
      morseText.push('-•-• ');
      break;
    case 'ч':
      morseText.push('---• ');
      break;
    case 'ш':
      morseText.push('---- ');
      break;
    case 'щ':
      morseText.push('--•- ');
      break;
    case 'ъ':
      morseText.push('--•-- ');
      break;
    case 'ы':
      morseText.push('-•-- ');
      break;
    case 'ь':
      morseText.push('-••- ');
      break;
    case 'э':
      morseText.push('••-•• ');
      break;
    case 'ю':
      morseText.push('••-- ');
      break;
    case 'я':
      morseText.push('•-•- ');
      break;
    case '1':
      morseText.push('•---- ');
      break;
    case '2':
      morseText.push('••--- ');
      break;
    case '3':
      morseText.push('•••-- ');
      break;
    case '4':
      morseText.push('••••- ');
      break;
    case '5':
      morseText.push('••••• ');
      break;
    case '6':
      morseText.push('-•••• ');
      break;
    case '7':
      morseText.push('--••• ');
      break;
    case '8':
      morseText.push('---•• ');
      break;
    case '9':
      morseText.push('----• ');
      break;
    case '0':
      morseText.push('----- ');
      break;
    case '.':
      morseText.push('•••••• ');
      break;
    case ',':
      morseText.push('•-•-•- ');
      break;
    default:
      morseText.push('  ');
      break;
  }
  }
  return morseText.join('')
}