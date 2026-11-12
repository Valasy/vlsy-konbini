function ProductCard({ title }){
    return (
        <section className="product-card">
            <h2 className="product-card__title">{ title }</h2>
            <p>Introduce los datos del producto.</p>
        </section>
    )
}

export default ProductCard;