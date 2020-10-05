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
    metaDesc,
    title,
    canonical,
    metaRobotsNofollow,
    opengraphSiteName,
    opengraphDescription,
    twitterDescription,
    twitterTitle,
    opengraphTitle,
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
      title={title}
      link={[{
        rel: "canonical",
        href: canonical
      }]}
      // titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `robots`,
          content: `${metaRobotsNoindex}, ${metaRobotsNofollow}`
        },
        {
          name: `description`,
          content: metaDesc
        },
        {
          property: `og:title`,
          content: opengraphTitle
        },
        {
          property: `og:site_name`,
          content: opengraphSiteName
        },
        {
          property: `og:modified_time`,
          content: opengraphModifiedTime
        },
        {
          property: `og:description`,
          content: opengraphDescription
        },
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
          content: twitterTitle
        },
        {
          name: `twitter:title`,
          content: twitterTitle
        },
        {
          name: `twitter:description`,
          content: twitterDescription
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
