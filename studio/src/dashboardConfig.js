export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b206eaa84d5e30b427d1f2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-s2nvf77o",
                  apiId: "59ab45df-e1d0-44e0-8bcb-9a50f60e29cf",
                },
                {
                  buildHookId: "60b206eaebf3ca2b88f89a23",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-j6vjpcj1",
                  apiId: "c291de0e-b939-4b13-bd91-87928df6a68c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bjarte/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-j6vjpcj1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
