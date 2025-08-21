"use client"

import { useEffect } from "react"

export default function AdsterraBanner() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//pl27474176.profitableratecpm.com/d06b49829cb22fc3b16c1a7d37f50a08/invoke.js"
    script.async = true
    script.setAttribute("data-cfasync", "false")
    document.getElementById("container-d06b49829cb22fc3b16c1a7d37f50a08")?.appendChild(script)
    // Optional cleanup
    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="flex justify-center my-6">
      <div id="container-d06b49829cb22fc3b16c1a7d37f50a08" style={{ width: "100%" }} />
    </div>
  )
}
