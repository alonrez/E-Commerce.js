import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Ruinning shoes.', price: '$5', image: 'https://media.wired.com/photos/5d82a38ecf348c00080e505a/master/w_2560%2Cc_limit/Gear-Veja_Running-LEAD.jpg' },
    { id: 1, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://sm.mashable.com/t/mashable_in/review/m/macbook-ai/macbook-air-late-2020-review-the-one-with-apple-silicon-insi_2quc.960.jpg' }
]


const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products