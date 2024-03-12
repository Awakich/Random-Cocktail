import axios from "axios"
import { useCallback, useEffect } from "react"

export const getCocktailFN = (setCocktail: React.Dispatch<React.SetStateAction<{
    drinks: Cocktail[];
} | undefined>>, setError: React.Dispatch<React.SetStateAction<undefined | any>>) => {

    const getCocktail = useCallback(async () => {
        const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setCocktail(res.data)
    }, [setCocktail])

    useEffect(() => {
        try {
            getCocktail()
        } catch (error) {
            setError(error)
            getCocktail()
        }
    }, [getCocktail])
}
