export const sanitizeUppercase = (string: string) => {
  let sanitizedString = '';

  for (let i = 0; i < string.length; i++) {
    sanitizedString += string[i]
      .replace(/ά|Ά/g, 'α')
      .replace(/έ|Έ/g, 'ε')
      .replace(/ή|Ή/g, 'η')
      .replace(/ί|Ί/g, 'ι')
      .replace(/ό|Ό/g, 'ο')
      .replace(/ύ|Ύ/g, 'υ')
      .replace(/ώ|Ώ/g, 'ω')
      .replace(/ς/g, 'σ');
  }

  return sanitizedString.toUpperCase();
};
