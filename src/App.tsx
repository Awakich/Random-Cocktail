import Cocktail from '@/components/Cocktail'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [cocktail, setCocktail] = useState<{ drinks: Cocktail[] }>()
  const [error, setError] = useState()

  const getCocktail = useCallback(async () => {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    setCocktail(res.data)
  }, [setCocktail])

  useEffect(() => {
    try {
      getCocktail()
    } catch (error: any) {
      setError(error)
    }
  }, [getCocktail])

  return (
    <Card className='border-none shadow-none flex flex-col max-w-screen-xl mx-auto h-screen  justify-center'>
      <CardHeader className='text-center'>
        <CardTitle className='text-6xl'>Your random cocktail today!</CardTitle>
        <CardDescription className='text-xl'>Press the button and get a cocktail!</CardDescription>
      </CardHeader>

      <CardContent>
        <Cocktail cocktail={cocktail?.drinks[0]} error={error} />
      </CardContent>

      <Button size={'lg'} className='text-xl py-8' onClick={() => getCocktail()}>New!</Button>
    </Card>
  )
}

export default App
