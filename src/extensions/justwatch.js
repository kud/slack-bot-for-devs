export default async ({ message, say }) => {
  const { text } = message

  const params = text.replace("!justwatch ", "")

  await say(
    `https://www.justwatch.com/fr/recherche?q=${encodeURIComponent(params)}`,
  )
}
