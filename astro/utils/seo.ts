const siteName = 'Gary McKeever';
const siteUrl = 'https://garymckeever.us';
const defaultImage = '/og-card.png';

export const defaultKeywords = [
  'gary mckeever',
  'staff software architect',
  'principal software architect',
  'software architect',
  'platform modernization',
  'distributed systems',
  'architecture leadership'
];

type WithBase = string | URL;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SchemaInput {
  '@context'?: string;
  '@type': string;
  [key: string]: unknown;
}

interface PageSchemaInput {
  title: string;
  description: string;
  path: string;
}

interface CreativeWorkInput extends PageSchemaInput {
  keywords?: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ItemListEntry {
  name: string;
  path: string;
  description?: string;
}

interface ArticleInput {
  title: string;
  description: string;
  datePublished: string;
  canonical: string;
  keywords?: string[];
  image?: string;
}

export const absoluteUrl = (path: string, base: WithBase = siteUrl) => new URL(path, base).toString();

export const personSchema = (): SchemaInput => ({
  '@type': 'Person',
  name: siteName,
  url: siteUrl,
  image: absoluteUrl('/img/me.jpg'),
  jobTitle: 'Staff Software Architect',
  description:
    'Staff Software Architect focused on platform modernization, distributed systems, and architecture leadership that keeps software delivery moving.',
  knowsAbout: [
    'Platform modernization',
    'Distributed systems',
    'Software architecture',
    'Developer platforms',
    'Workflow systems',
    'Cloud operations'
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Minnesota Duluth'
    }
  ],
  sameAs: ['https://github.com/X3r0byte', 'https://www.linkedin.com/in/gmckeever-88/']
});

export const websiteSchema = (): SchemaInput => ({
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: 'Professional software architecture site for Gary McKeever.',
  inLanguage: 'en-US'
});

export const webpageSchema = ({ title, description, path }: PageSchemaInput): SchemaInput => ({
  '@type': 'WebPage',
  name: title,
  description,
  url: absoluteUrl(path),
  isPartOf: {
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl
  }
});

export const collectionPageSchema = ({ title, description, path }: PageSchemaInput): SchemaInput => ({
  '@type': 'CollectionPage',
  name: title,
  description,
  url: absoluteUrl(path),
  isPartOf: {
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl
  }
});

export const creativeWorkSchema = ({ title, description, path, keywords = [] }: CreativeWorkInput): SchemaInput => ({
  '@type': 'CreativeWork',
  name: title,
  description,
  url: absoluteUrl(path),
  creator: {
    '@type': 'Person',
    name: siteName,
    url: siteUrl
  },
  keywords: keywords.join(', ')
});

export const faqPageSchema = (items: FaqItem[]): SchemaInput => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});

export const itemListSchema = (name: string, items: ItemListEntry[]): SchemaInput => ({
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
    ...(item.description ? { description: item.description } : {})
  }))
});

export const articleSchema = ({ title, description, datePublished, canonical, keywords = [], image = defaultImage }: ArticleInput): SchemaInput => ({
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  dateModified: datePublished,
  author: {
    '@type': 'Person',
    name: siteName,
    url: siteUrl
  },
  publisher: {
    '@type': 'Person',
    name: siteName,
    url: siteUrl
  },
  mainEntityOfPage: canonical,
  url: canonical,
  image: absoluteUrl(image),
  keywords: keywords.join(', ')
});

export const breadcrumbSchema = (items: BreadcrumbItem[]): SchemaInput => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const buildPageSchema = (schema: SchemaInput | SchemaInput[], base: WithBase = siteUrl) => {
  const list = Array.isArray(schema) ? schema : [schema];
  const valid = list.filter(Boolean).map((item) => ({
    '@context': 'https://schema.org',
    ...item
  }));

  if (valid.length === 0) {
    return '';
  }

  const payload = valid.map((item) => normalizeUrls(item, base));
  return JSON.stringify(payload.length === 1 ? payload[0] : payload);
};

const normalizeUrls = (value: unknown, base: WithBase): unknown => {
  if (typeof value === 'string') {
    if (value.startsWith('/')) {
      return absoluteUrl(value, base);
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeUrls(entry, base));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, normalizeUrls(entry, base)])
    );
  }

  return value;
};