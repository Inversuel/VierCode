import React from "react";

export const ProductList = (props) => {

  // TODO: display appropriate header ? ok
  // TODO: display only chosen columns - ok
  // TODO: display products as new table rows - ok
  // id: true,
  // name: true,
  // department: true,
  // price: true,
  // currency: true,
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length})</strong>
      </header>
      <table>
        <thead>
          <tr>
            { props.columns.id ? <th>ID</th> : <></>}
            { props.columns.name ? <th>Name</th> : <></>}
            { props.columns.department ? <th>Department</th> : <></>}
            { props.columns.price ? <th>Price</th> : <></>}
            { props.columns.currency ? <th>Currency</th> : <></>}
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => {
            return (
              <tr key={item.id}>
                { props.columns.id && <td>{item.id}</td>}
                { props.columns.name && <td>{item.name}</td> }
                { props.columns.department && <td>{item.department}</td>}
                { props.columns.price && <td>{`${item.price}`}</td>}
                { props.columns.currency && <td>{`${item.currency}`}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};