import { FC } from 'react'

type CocktailType = {
    cocktail: Cocktail | undefined | null,
    error: any | undefined | null
}

const Cocktail: FC<CocktailType> = ({ cocktail, error }) => {
    if (!cocktail) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <section className='space-y-8   '>
            <div className='flex gap-8 space-y-4'>
                <img className='w-80 h-80 rounded-lg text-center' alt='image cocktail' src={cocktail?.strDrinkThumb!} />
                <div className='flex justify-between gap-8 items-baseline'>
                    <div className='space-y-2'>
                        <h3 className='text-4xl font-semibold'>{cocktail?.strDrink}</h3>
                        <p className='text-xl'>{`Category: ${cocktail?.strCategory}`}</p>
                        <p className='text-xl'>{`Alcoholic: ${cocktail?.strAlcoholic}`}</p>
                        <p className='text-xl'>{`Glass drink: ${cocktail?.strGlass}`}</p>
                    </div>

                    <div className='space-y-2'>
                        <h5 className='text-2xl'>Ingredients:</h5>
                        <p className='text-xl'>{cocktail?.strIngredient1}</p>
                        <p className='text-xl'>{cocktail?.strIngredient2}</p>
                        <p className='text-xl'>{cocktail?.strIngredient3}</p>
                        <p className='text-xl'>{cocktail?.strIngredient4}</p>
                        <p className='text-xl'>{cocktail?.strIngredient5}</p>
                        <p className='text-xl'>{cocktail?.strIngredient6}</p>
                        <p className='text-xl'>{cocktail?.strIngredient7}</p>
                        <p className='text-xl'>{cocktail?.strIngredient8}</p>
                        <p className='text-xl'>{cocktail?.strIngredient9}</p>
                        <p className='text-xl'>{cocktail?.strIngredient10}</p>
                        <p className='text-xl'>{cocktail?.strIngredient11}</p>
                        <p className='text-xl'>{cocktail?.strIngredient12}</p>
                        <p className='text-xl'>{cocktail?.strIngredient13}</p>
                        <p className='text-xl'>{cocktail?.strIngredient14}</p>
                        <p className='text-xl'>{cocktail?.strIngredient15}</p>
                    </div>

                    <div className='space-y-2'>
                        <h5 className='text-2xl'>Measure</h5>
                        <p className='text-xl'>{cocktail?.strMeasure1}</p>
                        <p className='text-xl'>{cocktail?.strMeasure2}</p>
                        <p className='text-xl'>{cocktail?.strMeasure3}</p>
                        <p className='text-xl'>{cocktail?.strMeasure4}</p>
                        <p className='text-xl'>{cocktail?.strMeasure5}</p>
                        <p className='text-xl'>{cocktail?.strMeasure6}</p>
                        <p className='text-xl'>{cocktail?.strMeasure7}</p>
                        <p className='text-xl'>{cocktail?.strMeasure8}</p>
                        <p className='text-xl'>{cocktail?.strMeasure9}</p>
                        <p className='text-xl'>{cocktail?.strMeasure10}</p>
                        <p className='text-xl'>{cocktail?.strMeasure11}</p>
                        <p className='text-xl'>{cocktail?.strMeasure12}</p>
                        <p className='text-xl'>{cocktail?.strMeasure13}</p>
                        <p className='text-xl'>{cocktail?.strMeasure14}</p>
                        <p className='text-xl'>{cocktail?.strMeasure15}</p>
                    </div>
                </div>
            </div>

            <p className='text-xl text-secondary-foreground italic'>{`Instruction: ${cocktail?.strInstructions}`}</p>
        </section>
    )
}

export default Cocktail