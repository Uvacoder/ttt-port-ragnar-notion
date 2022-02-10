const { Client } = require("@notionhq/client")

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_KEY,
})

export async function getAllPostsHelper() {
    try {
        const posts = await notionClient.databases.query({
          database_id: process.env.NOTION_DATABASE_ID,
          sorts: [
            {
              property: "Published",
              direction: "descending",
            },
          ],
          filter: {
            property: "Publish",
            checkbox: {
              equals: true,
            },
          }
        })
        const postsFiltered = posts.results.map((post) => {
          return {
            title: post.properties.Name.title[0].plain_text,
            subtitle: post.properties.Subtitle.rich_text[0].plain_text,
            createdOn: post.properties.Published.date.start.slice(0,4),
            tags: post.properties.Tags.multi_select.map((select) => (select.name)),
            url: post.url.slice(22),
          }
        })

        return postsFiltered
    } catch(error) {
        return {error}
    }
}