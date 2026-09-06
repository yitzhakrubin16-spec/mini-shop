import { useEffect, useRef } from "react"

type SearchBarProps = {
    search: string
    setSearch: (value: string) => void
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
      <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          />
  )
}

export default SearchBar