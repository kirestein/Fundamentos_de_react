// Tabela mostrando todos os produtos, ids e preços
import { products } from "../../data/products"
import './tableProducts.css'
export const TableProducts = _ => {
  const prod = products.map((product, j) => {
    return (
      <tr className={ j % 2 === 0 ? 'Par' : 'Impar' } key={ product.id }>
        <td> { product.id } </td>
        <td> { product.name } </td>
        <td> R$ { product.price.toFixed(2).replace('.', ',') } </td>
      </tr>
    )
  })
  return (
    <table className="ProductsTable">
      <thead>
        <tr className="titleLine">
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        { prod }
      </tbody>
    </table>
  )
}