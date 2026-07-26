const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

const earthYearInSeconds = 365.25 * 24 * 60 * 60;

export function age(planet, seconds) {
  if (!(planet in planets)) {
    throw new Error("not a planet");
    return;
  } 

  const result = (seconds / earthYearInSeconds) / planets[planet];
  const formatted = Number(result.toFixed(2));
  return formatted;
}
