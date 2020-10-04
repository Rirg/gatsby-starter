/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ data, meta }) {

  if (!data) return null;

  const {
    yoast_wpseo_metadesc,
    yoast_wpseo_title,
    yoast_wpseo_canonical,
    metaRobotsNofollow,
    opengraphSiteName,
    opengraphDescription,
    yoast_wpseo_twitter_description,
    yoast_wpseo_twitter_title,
    opengraphModifiedTime,
    metaRobotsNoindex,
    focusKw,
    metaKeyWords,
    openGraphAuthor
  } = data

  return (
    <Helmet
      htmlAttributes={{
        lang: "EN"
      }}
      title={yoast_wpseo_title}
      link={[{
        rel: "canonical",
        href: yoast_wpseo_canonical
      }]}
      // titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `robots`,
          content: `${metaRobotsNoindex}, ${metaRobotsNofollow}`
        },
        {
          name: `description`,
          content: yoast_wpseo_metadesc
        },
        {
          property: `og:title`,
          content: yoast_wpseo_title
        },
        // {
        //   property: `og:site_name`,
        //   content: opengraphSiteName
        // },
        // {
        //   property: `og:modified_time`,
        //   content: opengraphModifiedTime
        // },
        // {
        //   property: `og:description`,
        //   content: opengraphDescription
        // },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: yoast_wpseo_title
        },
        {
          name: `twitter:title`,
          content: yoast_wpseo_twitter_title
        },
        {
          name: `twitter:description`,
          content: yoast_wpseo_twitter_description
        }
      ].concat[meta]}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  data: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO
