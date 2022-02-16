import {
  createClient,
  createPortableTextComponent,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';

import config from './config';

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
