// components/sections/CustomersData.tsx
import fs from 'fs'
import path from 'path'

export async function getCustomerImages() {
  try {
    const directory = path.join(process.cwd(), 'public/images/customers')
    const filenames = fs.readdirSync(directory)
    
    return filenames.map(filename => {
      const name = filename.replace(/\.[^/.]+$/, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return {
        name,
        logo: `/images/customers/${filename}`,
        alt: `${name} logo`
      }
    })
  } catch (error) {
    console.warn('Error reading customer images:', error)
    return []
  }
}