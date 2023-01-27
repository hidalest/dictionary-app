type allowedFonts = string;

export const getFontFullName = (font: allowedFonts) => {
  let fontName = '';
  switch (font) {
    case 'mono':
      fontName = 'Roboto Mono';
      break;
    case 'sans':
      fontName = 'Sans-Serif';
      break;
    case 'serif':
      fontName = 'Source Serif Pro';
      break;

    default:
      fontName = 'Not font found';
      break;
  }

  return fontName;
};
