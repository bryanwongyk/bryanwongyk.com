/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve('src/templates/blog-post.tsx');
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						id
						frontmatter {
							path
							title
							date
							author
							readingTime
						}
					}
				}
			}
		}
	`).then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}

		res.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate,
			});
		});
	});
};
