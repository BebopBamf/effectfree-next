import { createPreviewSubscriptionHook } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import config from './config';

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);
