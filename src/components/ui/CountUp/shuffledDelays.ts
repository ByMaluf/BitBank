/** Atrasos igualmente espaçados (0, step, 2*step, ...) embaralhados — pra escalonar várias CountUp sem repetir sempre a mesma ordem. */
export function shuffledDelays(count: number, step: number) {
  const delays = Array.from({ length: count }, (_, i) => i * step);
  for (let i = delays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [delays[i], delays[j]] = [delays[j], delays[i]];
  }
  return delays;
}
