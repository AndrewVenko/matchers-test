export default function sortHealth(arr) {
  const characters = arr;
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
