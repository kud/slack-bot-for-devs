import caniuse from "caniuse-api"
import { markdownTable } from "markdown-table"
import { paramCase } from "change-case"

const supportToMarkdownTable = (support) => {
  if (!support) {
    return ""
  }

  return markdownTable([
    ["Browser", "Version"],
    ...Object.entries(support).map(([browser, table]) => [
      browser,
      String(table.y),
    ]),
  ])
}

export default async ({ message, say }) => {
  const { text } = message

  const params = text.replace("!caniuse ", "")

  try {
    await say(
      `\`\`\`${supportToMarkdownTable(
        caniuse.getSupport(paramCase(params)),
      )}\`\`\``,
    )

    await say(`⇒ https://caniuse.com/?search=${encodeURIComponent(params)}`)
  } catch {
    await say(
      `Not found. Let's try https://caniuse.com/?search=${encodeURIComponent(
        params,
      )}`,
    )
  }
}
