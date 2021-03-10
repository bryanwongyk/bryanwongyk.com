/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

let path = require('path');

// https://stackoverflow.com/questions/64594130/programmatically-create-multiple-types-of-pages-in-gatsby-js

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve('src/templates/blog-post.tsx');
	const blogPosts = graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { type: { in: ["blog"] } } }
			) {
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

	const projectTemplate = path.resolve('src/templates/portfolio-project.tsx');
	const portfolioProjects = graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { type: { in: ["portfolio"] } } }
			) {
				edges {
					node {
						id
						frontmatter {
							title
							featuredImage {
								publicURL
							}
							description
							technologies
							linkToProject
							linkToGithub
							path
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
				component: projectTemplate,
			});
		});
	});

	return Promise.all([blogPosts, portfolioProjects]);
};
