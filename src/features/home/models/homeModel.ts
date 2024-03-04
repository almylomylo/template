export type HomePageType = {
  is_front?: boolean | null;
  title?: string | null;
  image?: any;
  body?: any;
  sections?: SectionType[] | null;
  metaTags?: MetaTags | null;
};

export type SectionType = {
  type?: string | null;
  data?: SectionType | null;
  layout?: any;
  title?: string | null;
  subtitle?: string | null;
  image?: any;
  mobile_image?: string | null;
  cta?: CtaType | null | null;
  title_link?: string | null;
  direction?: string | null;
  sideImage?: string | null;
  products?: ProductType[] | null;
  content?: SectionType[] | null;
  label?: string | null;
  sections?: SectionType[] | null;
};

export type CtaType = {
  title?: string | null;
  url?: string | null;
};

export type ProductType = {
  product_id?: number | null;
  title?: string | null;
  path?: string | null;
  url?: string | null;
  cleanUrl?: string | null;
  default_variation?: DefaultVariation | null;
  mastersku?: string | null;
  category?: string | null;
  tags?: TagType[] | null;
  list_price?: any;
  list_price_formatted?: any;
  price?: number | null;
  price_formatted?: string | null;
  discount_percentage?: any;
  image?: string | null;
  image_worn?: string | null;
};

export type DefaultVariation = {
  name?: string | null;
  id?: number | null;
  sku?: string | null;
  currency?: string | null;
  list_number?: any;
  number?: number | null;
  list_price?: any;
  price?: string | null;
  discount_percentage?: any;
  stock_level?: number | null;
  status?: boolean | null;
};

export type TagType = {
  tid?: number | null;
  path?: string | null;
  cleanUrl?: string | null;
  name?: string | null;
};

export type MetaTags = {
  description?: string | null;
  title?: string | null;
  canonical_url?: string | null;
  content_language?: string | null;
  shortlink?: string | null;
  'og?:title'?: string | null;
  'og?:description'?: string | null;
  'og?:site_name'?: string | null;
  'og?:url'?: string | null;
};
