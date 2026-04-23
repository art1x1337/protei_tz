export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '');

  let normalized = digits;
  if (normalized.startsWith('8')) normalized = `7${normalized.slice(1)}`;
  if (!normalized.startsWith('7')) normalized = `7${normalized}`;

  const limited = normalized.slice(0, 11);
  const parts = limited.split('');

  let result = '+7';
  if (parts.length > 1) {
    result += ` (${parts.slice(1, 4).join('')}`;
  }
  if (parts.length >= 4) {
    result += ')';
  }
  if (parts.length > 4) {
    result += ` ${parts.slice(4, 7).join('')}`;
  }
  if (parts.length > 7) {
    result += `-${parts.slice(7, 9).join('')}`;
  }
  if (parts.length > 9) {
    result += `-${parts.slice(9, 11).join('')}`;
  }

  return result;
};

export const isPhoneValid = (value: string): boolean => {
  return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
};
