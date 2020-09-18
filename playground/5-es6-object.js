//Object property shorthand

const name='Nikita'
const userAge=22

const user={
    name,
    age:userAge
}

console.log(user)

// Object Destructuring

const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined

}

// const label=product.label
// const stock=product.stock

const {label:productLabel,stock,rating}=product
console.log(productLabel,stock,rating)