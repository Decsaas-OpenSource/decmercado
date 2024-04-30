import crypto from 'crypto';

export function geradorDeHash() {
  const currentDate = new Date().toISOString();
  const hash = crypto.createHash('sha256').update(currentDate).digest('hex');
  return hash;
}