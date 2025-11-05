/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
import {
  BlockContent,
  BlockImage,
  HeroRow,
} from '@/components';
// import { Courier_Prime } from "next/font/google";

export async function getStaticProps() {
  const query =
  `*[ page_slug.current == "home" ][0]{
    meta_description,
    page_slug,
    page_title,
    hero,
    sections,
    layered_image,
    image_layers,
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

interface HomeProps {
  pageData: any,
}

export default function HomePage({pageData}:HomeProps) {

  return (
    <>{pageData &&
      <>
        <main className="page_content home">
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
              })}
            </div>
          </section>
        </main>
      </>}
    </>
  );
}
