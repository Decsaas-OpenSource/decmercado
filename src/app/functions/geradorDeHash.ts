import crypto from 'crypto';

export function geradorDeHash() {
  return geradorDeHashComParametro(new Date().toISOString());
}

export function geradorDeHashComParametro(valor: string) {
  const hash = crypto.createHash('sha256').update(valor).digest('hex');
  return hash;
}