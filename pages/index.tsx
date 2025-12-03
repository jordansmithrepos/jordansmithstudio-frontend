/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
import { queryPage, queryHeader, queryFooter } from '@/lib/groqQueries';
import {
  BlockContent,
  BlockImage,
  HeroRow,
  HeroRowBig,
} from '@/components';

export async function getStaticProps() {

  const pageData = await client.fetch(queryPage, { slug: 'home' })
  const isHeroBig = await pageData.hero.image ? true : false
  const headerData = await client.fetch(queryHeader)
  const footerData = await client.fetch(queryFooter)
  return {
    props: {
      pageData,
      isHeroBig,
      footerData,
      headerData,
    },
  }
}

interface HomeProps {
  pageData: any,
  isHeroBig: boolean,
}

export default function HomePage({pageData, isHeroBig}:HomeProps) {
  return (
    <>{pageData &&
      <main className="page_content home">
        {pageData.hero && isHeroBig ?
          <HeroRowBig rowData={pageData.hero} />
        : pageData.hero && !isHeroBig &&
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
      }
    </>
  );
}
