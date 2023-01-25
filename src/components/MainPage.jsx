import React from 'react'
import Card from './Card'

const MainPage = () => {
  return (
    <div>
        <h1 class="flex justify-center bg-gray-300 p-2">Resources</h1>
        <div>
            <h5 class="py-8">Enhancing your selling experience</h5>
            <div class="grid grid-cols-3 gap-10">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default MainPage