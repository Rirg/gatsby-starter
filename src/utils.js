import queryString from "query-string"
import Cookies from "js-cookie"
import { HUBSPOT_API, IPIFY_API } from "./apis/apis"

export const textEllipsis = (str, maxLength, { side = "end", ellipsis = "..." } = {}) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length))
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis
    }
  }
  return str
}

export const setFormUtmParams = (setValue) => {
  if (typeof window !== "undefined" && window) {
    const parameters = window.location.search ? queryString.parse(window.location.search) : ""
    const params = ["utm_medium", "utm_source", "utm_campaign", "utm_content", "utm_term", "utm_name"]
    if (parameters !== "") {
      params.map(param => {
        if (param in parameters) {
          setValue(param, parameters[param])
        }
      })
    }
  }
}

export const submitHubspotForm = async (data, portalId, formId) => {
  let fields = []
  Object.entries(data).map(item => {
    fields.push({ name: item[0], value: item[1] })
  })

  const isBrowser = typeof window !== "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const pageName = isBrowser ? document.title : null
  const ipAddress = await IPIFY_API.get()

  const context = ipAddress && ipAddress.data.ip ?
    {
      ipAddress: ipAddress.data.ip,
      hutk,
      pageUri,
      pageName
    } :
    {
      hutk,
      pageUri,
      pageName
    }

  try {
    const res = await HUBSPOT_API.post(
      `/${portalId}/${formId}`,
      JSON.stringify({
        submittedAt: Date.now(),
        fields,
        context
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json, application/xml, text/plain, text/html, *.*"
        }
      }
    )

    return res
  } catch (e) {
    return null
  }
}
