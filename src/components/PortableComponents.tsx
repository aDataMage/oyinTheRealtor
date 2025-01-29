import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/lib/utils";
// Ensure you adjust this path to your `urlFor` function

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto object-cover"
          src={
            urlFor(props.value)
              ?.width(600)
              ?.height(400)
              ?.quality(80)
              ?.auto("format")
              ?.url() || "https://placehold.co/600x400/png"
          }
          alt={props?.value?.alt || "Image"}
          width={600}
          height={400}
        />
      ) : null,
  },
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-7 text-gray-700 font-light">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-gray-700 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent text-sm pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4 text-base leading-7">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4 text-base leading-7">{children}</li>
    ),
  },
};
