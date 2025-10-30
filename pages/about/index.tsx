/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
// import { returnImageURL } from '@/lib/helpers';
// import Link from "next/link";
import {
  BlockContent,
  BlockImage,
  GridOfImages,
  HeroRow,
} from '@/components';

export async function getStaticProps() {
  const query =
  `*[ page_slug.current == "about" ][0]{
    meta_description,
    page_slug,
    page_title,
    hero,
    sections,
  }`
  const queryHeader =
  `*[_type == "header"][0]{
    home_link,
    nav_links,
  }`
  const queryFooter =
  `*[_type == "footer"][0]{
    copyright_text,
  }`
  const pageData = await client.fetch(query)
  const headerData = await client.fetch(queryHeader)
  const footerData = await client.fetch(queryFooter)
  return {
    props: {
      pageData,
      footerData,
      headerData,
    },
  }
}

interface AboutProps {
  pageData: any,
}

export default function AboutPage({pageData}:AboutProps) {

  return (
    <>{pageData &&
      <>
        <main className="page_content about">
          {pageData.hero &&
            <HeroRow rowData={pageData.hero} />
          }
          <section className="content_row">
            <div className="container">
              {pageData.sections && pageData.sections.map((section:any, i:number) => {
                if (section._type === 'contentBlock') {
                  return (
                    <BlockContent blockData={section} key={i} />
                  );
                }
                if (section._type === 'imageBlock') {
                  return(
                    <BlockImage blockData={section} key={i} />
                  );
                }
                if (section._type === 'imageGrid') {
                  return (
                    <GridOfImages blockData={section} key={i} />
                  );
                }
              })}
            </div>
          </section>
        </main>
      </>}
    </>
  );
}
