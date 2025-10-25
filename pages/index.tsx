/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import { client, urlFor } from '../lib/sanityClient';
import Link from "next/link";
import Image from "next/image";
// import { Courier_Prime } from "next/font/google";

export async function getStaticProps() {
  const query =
  `*[ page_slug.current == "home" ][0]{
    meta_description,
    page_slug,
    page_title,
    sections,
  }`
  const pageData = await client.fetch(query)
  return {
    props: { pageData },
  }
}

interface HomeProps {
  pageData: any,
}

export default function Home({pageData}:HomeProps) {

  return (
    <>{pageData &&
      <>
        {/* <Head>
          <title>{pageData.page_title ?? 'Jordan Smith Studio'}</title>
          <meta name="description" content={pageData} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/jss_multiplied_favicon.png" />
        </Head> */}
        <main className="page_content home">
          {pageData.sections && pageData.sections.map((section:any, i:number) => { if (section._type === 'heroBlock') {
            const bgImageURL = urlFor(section.image);
            return (
              <section className="hero_row" style={{backgroundImage: 'url(' + bgImageURL.url() + ')'}} key={i}>
                <div className="hero_wrapper">
                  <div className="container">
                    <div className="hero_content">
                      <h1>{section.title ?? 'Welcome!'}</h1>
                      {section.has_button &&
                      <div className="cta_wrapper">
                        <Link href={section.cta.url} target={section.cta.new_window ? '_blank' : ''} className="cta btn">{section.cta.text}</Link>
                      </div>
                      }
                    </div>
                  </div>
                </div>
              </section>
            );
          }})}
          <section className="content_row">
            <div className="container py-5">
              {pageData.sections && pageData.sections.map((section:any, i:number) => {
                if (section._type === 'contentBlock') {
                  const imageURL = urlFor(section.block_image);
                  // console.log( '--> jds contentBlock:', imageURL );
                  return (
                    <div key={i} className="row d-flex align-items-center">
                      <div className="col-12 col-md-6">
                        {section.block_title && <h2>{section.block_title}</h2>}
                        {section.block_copy &&
                        <div className="block_copy" dangerouslySetInnerHTML={{ __html: section.block_copy[0]?.children[0]?.text }}></div>
                        }
                      </div>
                      <div className="col-12 col-md-6">
                        <Image
                          src={imageURL.url()}
                          height={600}
                          width={600}
                          alt=""
                          className="w-100 h-auto"
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </section>
          <section className="social_row">
            <div className="container">[IG FEED GOES HERE?]</div>
          </section>
        </main>
        <footer>
        </footer>
      </>}
    </>
  );
}
