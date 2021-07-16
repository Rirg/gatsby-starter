import React from "react"
import MiscContent from "./layouts/MiscContent"

const getLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent {...layout} />
  }
}

export default getLayout
