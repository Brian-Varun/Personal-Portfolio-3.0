import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm'; // for GitHub Flavored Markdown

async function getProjectData(slug) {
  const fullPath = path.join(process.cwd(), 'app', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .use(gfm) // Add GitHub-Flavored Markdown support
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app')).filter(file => file.endsWith('.md'))
  return files.map(filename => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function ProjectPage({ params }) {
  const { slug } = params
  const projectData = await getProjectData(slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Return to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </div>
  )
}