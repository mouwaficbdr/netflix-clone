export default function truncateText(text) {
  if (text) {
    const screenWidth = window.innerWidth;
    const words = text.split(' ');

    let numWords;
    if (screenWidth < 600) {
      numWords = 30; // Pour les petits écrans
    } else if (screenWidth < 900) {
      numWords = 50; // Pour les écrans moyens
    }

    // Tronquer le texte et ajouter "..." s'il est raccourci
    const truncated = words.slice(0, numWords).join(' ');
      return truncated.length < text.length ? truncated + '...' : truncated;
  }
}