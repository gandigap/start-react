
let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (

    <div className='users__pagination'>
      {pages.map(page => {
        return <span
          className={currentPage === page ? 'users__pagination__pagin selected__pagin' : 'users__pagination__pagin '}
          onClick={(event) => { onPageChanged(page) }}>{page}
        </span>
      })}
    </div>

  )
}
export default Paginator;