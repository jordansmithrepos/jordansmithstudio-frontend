/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanityHelpers';
import {
  BlockContent,
  BlockImage,
  HeroRow,
  HeroRowBig,
} from '@/components';

export async function getStaticProps() {
  const query =
  `*[ page_slug.current == "home" ][0]{
    meta_description,
    share_image{
      _type,
      asset->{
        url,
        _type,
        altText,
        description,
        title,
        metadata{
          dimensions{
            height,
            width
          }
        }
      }
    },
    page_slug,
    page_title,
    hero,
    sections[]{
      _type == "imageBlock" => {
        _type,
        block_image{
          _type,
          asset->{
            url,
            _type,
            altText,
            description,
            title,
            metadata{
              dimensions{
                height,
                width
              }
            }
          }
        },
        layered_image,
        image_layers[]{
          _key,
          _type,
          asset->{
            _ref,
            _type,
            url,
            altText,
            description,
            title,
            metadata{
              dimensions{
                height,
                width
              }
            }
          }
        }
      },
      _type == "imageGrid" => {
        _key,
        _type,
        grid_copy,
        grid_title,
        image_grid,
      },
      _type != "imageBlock" && _type != "imageGrid" => {
        _key,
        _type,
        block_copy,
        block_title,
        block_image{
          _type,
          asset->{
            url,
            _type,
            altText,
            description,
            title,
            metadata{
              dimensions{
                height,
                width
              }
            }
          }
        },
        cta,
        has_cta,
        has_image,
        layered_image,
        image_layers[]{
          _key,
          _type,
          asset->{
            _ref,
            _type,
            url,
            altText,
            description,
            title,
            metadata{
              dimensions{
                height,
                width
              }
            }
          }
        }
      }
    },
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
