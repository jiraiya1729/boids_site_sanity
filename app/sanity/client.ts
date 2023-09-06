import { SanityClient, createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const client:SanityClient = createClient({
    projectId: 'cxdc3akg', //put your project id here
    dataset: 'production',
    apiVersion: "2021-03-25",
    useCdn: false //up to date data-->false
  });
  const builder:ImageUrlBuilder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource):ImageUrlBuilder {
  return builder.image(source)
}
export default client;
