import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {

    return (
    <>
      <div className='ListContainer'>
        <h1>{greeting}</h1>
      </div>
      
    </>
  );
}