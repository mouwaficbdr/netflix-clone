import { fetchGenres } from "./fetchTmdb";

export async function mapGenreIdsToNames(genreIds, type) {
  try {
    const allGenres = await fetchGenres(type)

    const genreNames = genreIds
      .map((id) => {
        const genre = allGenres.find((g) => g.id === id)
        return genre ? genre.name : null
      })
      .filter(Boolean)
      return genreNames
  } catch (error) {
    console.log("Erreur lors du mappage des genres", error)
    return []
  }
}