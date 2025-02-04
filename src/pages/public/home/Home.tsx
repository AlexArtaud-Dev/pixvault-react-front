import { useState } from 'react'
import {Button} from "@/components/ui/button.tsx";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Button onClick={() => setCount(c => c + 1)}>Click me</Button>
      <h1>Test count: {count}</h1>
    </div>
  )
}

export default Home
