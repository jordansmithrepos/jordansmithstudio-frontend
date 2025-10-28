/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
import { returnImageURL } from '@/lib/helpers';
import Link from "next/link";
import {
  BlockContent,
  BlockImage,
  GridOfImages,
} from '@/components';

export async function getStaticProps() {
  const query =
  `*[ page_slug.current == "artwork" ][0]{
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

interface ArtworkProps {
  pageData: any,
}

export default function ArtworkPage({pageData}:ArtworkProps) {

  return (
    <>{pageData &&
      <>
        <main className="page_content artwork">
          {pageData.hero &&
            <section className="hero_row" style={{backgroundImage: 'url(' + returnImageURL(pageData.hero.image) + ')'}}>
              <div className="hero_wrapper">
                <div className="container">
                  <div className="hero_content">
                    <h1>{pageData.hero.title ?? 'Welcome!'}</h1>
                    {pageData.hero.has_button &&
                    <div className="cta_wrapper">
                      <Link href={pageData.hero.cta.url} target={pageData.hero.cta.new_window ? '_blank' : ''} className="cta btn">{pageData.hero.cta.text}</Link>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </section>
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
