import rss from '@astrojs/rss';
import { siteContent } from '../data/site-content';

export async function GET(context) {
  return rss({
    title: 'Gary McKeever',
    description: 'Architecture writing from Gary McKeever.',
    site: context.site,
    items: siteContent.blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.href,
      pubDate: new Date(post.date)
    }))
  });
}