import { useState, useEffect } from "react"

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        setError("")
        fetch(url)
        .then((res) => {
          if(!res.ok){
            throw new Error("Failed to load products")
          }
    
          return res.json()
        })
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch(() => {
          setError("Failed to load products")
          setLoading(false)
        })
      }, [url])
    
      return {data, error, loading}

}

export default useFetch