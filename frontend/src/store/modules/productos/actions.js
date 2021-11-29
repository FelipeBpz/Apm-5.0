export async function fetchProductos({ state, commit, dispatch, rootState }){
    const data = await fetch('https://fakestoreapi.com/products');
    const productos = await data.json();

    commit('setProductos', productos);
}