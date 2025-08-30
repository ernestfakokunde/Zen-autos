import Navigation from "./Navigation/Navigation"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import './App.css'
import { useMemo, useState } from "react"
import products from "./db/data"
import Category from "./Sidebar/Category/Category"
import Color from "./Sidebar/Color/Color"
import Card from "./Components/Card"

const App = () => {

const [selectedCategory, setSelectedCategory] = useState(null)
const [selectedCompany, setSelectedCompany] = useState(null)
const [selectedColor, setSelectedColor] = useState(null)
const [selectedPrice, setSelectedPrice] = useState(null)

// input filter
const [query, setQuery] = useState('')

const handleInputChange = (event) => {
  setQuery(event.target.value)
}

// radio/select changes
const handleChange = (event) => {
  const { name, value } = event.target
  if (name === 'category') setSelectedCategory(value || null)
  if (name === 'color') setSelectedColor(value || null)
  if (name === 'price') setSelectedPrice(value || null)
}

// buttons click for company
const handleClick = (value) => {
  setSelectedCompany(value || null)
}

// compute filtered list
const filteredItems = useMemo(() => {
  let list = products

  if (query) {
    const q = query.toLowerCase()
    list = list.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      (p.company || '').toLowerCase().includes(q)
    )
  }

  if (selectedCategory) {
    list = list.filter((p) => (p.category || '').toLowerCase() === selectedCategory.toLowerCase())
  }

  if (selectedCompany) {
    list = list.filter((p) => (p.company || '').toLowerCase() === selectedCompany.toLowerCase())
  }

  if (selectedColor) {
    list = list.filter((p) => (p.color || '').toLowerCase().includes(selectedColor.toLowerCase()))
  }

  if (selectedPrice) {
    // prices in data are strings like "$99". Normalize to number.
    const inRange = (priceStr, min, max) => {
      const n = Number(String(priceStr).replace(/[^0-9.]/g, ''))
      return n >= min && n <= max
    }
    if (selectedPrice === 'all') {
      // no-op
    } else if (selectedPrice === '0-50') {
      list = list.filter((p) => inRange(p.newPrice, 0, 50))
    } else if (selectedPrice === '50-100') {
      list = list.filter((p) => inRange(p.newPrice, 50, 100))
    } else if (selectedPrice === '100-150') {
      list = list.filter((p) => inRange(p.newPrice, 100, 150))
    } else if (selectedPrice === '150+') {
      list = list.filter((p) => inRange(p.newPrice, 150, Number.POSITIVE_INFINITY))
    }
  }

  return list
}, [ query, selectedCategory, selectedCompany, selectedColor, selectedPrice])

// color filter
const handleColorChange = (event) => {
  const value = event.target.value || null
  setSelectedColor(value)
}

  return (
    <div className="app-container">
      <Sidebar handlechange={handleChange} handleColorChange={handleColorChange}/>
      <div className="main-content">
        <Navigation value={query} onChange={handleInputChange} />
        <div className="content-section">
          <Recommended onSelectCompany={handleClick} />
          <Products items={filteredItems} />
        </div>
      </div>
    </div>
  )
}

export default App