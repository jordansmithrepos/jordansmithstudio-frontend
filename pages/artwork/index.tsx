/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
import { returnImageURL } from '@/lib/helpers';
import Link from "next/link";
import {
  BlockContent,
  BlockImage
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
  const pageData = await client.fetch(query)
  return {
    props: { pageData },
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
            <div className="container py-5">
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
                    <div key={i} className="imageGrid row">
                      <div className="col-12">
                        {section.grid_title && <h2 className="section_title">{section.grid_title}</h2>}
                        <div className="image_grid">[IMAGE GRID GOES HERE]</div>
                      </div>
                    </div>
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
